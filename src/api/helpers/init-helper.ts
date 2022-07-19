/**
 * @file [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) init helpers
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  ModularEngineConfig,
  ModularEngineCustomConfig,
  ModularEngineFormatter,
  ModularEngineParser,
  ModularEngineEffects,
  ModularEngineStore,
} from "modular-engine-types";

import { createModularReducer } from "modular-engine-tools";
import { fillObject } from "modular-utils";

/**
 * parse [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) plugins
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const parsePlugins = (config: ModularEngineConfig) => {
  let inputConfig = { ...config };

  let enabledPlugins: Record<string, boolean> = {};
  let formatters: ModularEngineFormatter[] = [];
  let reduxConfigs: ((config: ModularEngineConfig) => {
    slice?: string;
    effects?: ModularEngineEffects<any>;
    initialState?: any;
    reducer?: any;
  })[] = [];
  let postInitActions: ModularEngineParser[] = [];
  let preInitActions: ModularEngineParser[] = [];
  let preInitCallbacks: ((
    config: ModularEngineConfig,
    enabledPlugins: Record<string, boolean>
  ) => void)[] = [];
  let postInitCallbacks: ((
    config: ModularEngineConfig,
    store: ModularEngineStore,
    enabledPlugins: Record<string, boolean>
  ) => void)[] = [];
  let lockedFields: string[] = ["redux"];

  const formatAction =
    (action: ModularEngineParser): ModularEngineParser =>
    ({ config, store }) => {
      const output = action({ config, store });
      return output || config;
    };

  inputConfig.plugins.forEach((plugin) => {
    try {
      const actions = plugin();

      if (actions.create) {
        const additionalField = actions.create(config) || {
          field: null,
          content: {},
        };

        if (additionalField.field && additionalField.field !== "config") {
          inputConfig[additionalField.field] = additionalField.content;
          lockedFields.push(additionalField.field);
        }
      }

      if (actions.redux) {
        reduxConfigs.push(actions.redux);
      }

      actions.format && formatters.push(actions.format);

      actions.before && preInitActions.push(formatAction(actions.before));

      actions.after && postInitActions.push(formatAction(actions.after));

      if (actions.feature) {
        enabledPlugins[actions.feature] = true;
      }

      actions.preInit && preInitCallbacks.push(actions.preInit);

      actions.postInit && postInitCallbacks.push(actions.postInit);
    } catch {}
  });

  const checkFields = (
    previousInput: ModularEngineConfig,
    formattedConfig: ModularEngineConfig
  ) => {
    let result = { ...formattedConfig };
    lockedFields.forEach((key) => {
      if (!result[key]) {
        result[key] = previousInput[key];
      }
    });

    return result;
  };

  formatters.forEach((formatter) => {
    inputConfig = checkFields(
      inputConfig,
      formatter(inputConfig, enabledPlugins)
    );
  });

  return {
    before: (config) => {
      let input = { ...config };

      preInitActions.forEach((preInitAction) => {
        input = checkFields(input, preInitAction({ config: input }));
      });

      reduxConfigs.forEach((reduxConfigCallback) => {
        const reduxConfig = reduxConfigCallback(input);

        if (reduxConfig.slice && reduxConfig.slice !== "config") {
          inputConfig.redux.customize[reduxConfig.slice] =
            fillObject<ModularEngineCustomConfig>({
              toFill: inputConfig.redux.customize[reduxConfig.slice],
              defaultObj: { state: {}, effects: {} },
            });

          const initialState = reduxConfig.initialState || {};
          const actualState =
            inputConfig.redux.preload[reduxConfig.slice] || {};

          inputConfig.redux.preload[reduxConfig.slice] = {
            ...initialState,
            ...actualState,
            ...input.redux.customize[reduxConfig.slice].state,
          };

          let effects = input.redux.customize[reduxConfig.slice].effects;

          if (reduxConfig.effects) {
            effects = { ...effects, ...reduxConfig.effects };
          }

          input.redux.reducers[reduxConfig.slice] = createModularReducer({
            initialState: inputConfig.redux.preload[reduxConfig.slice],
            effects,
            additionalReducer: reduxConfig.reducer,
          });
        }
      });

      preInitCallbacks.forEach((callback) => {
        callback(input, enabledPlugins);
      });
      return input;
    },

    after: (config, store) => {
      postInitCallbacks.forEach((callback) => {
        callback(config, store, enabledPlugins);
      });

      let input = { ...config };

      postInitActions.forEach((postInitAction) => {
        input = checkFields(input, postInitAction({ config: input, store }));
      });

      return input;
    },
    config: inputConfig,
    enabledPlugins,
  };
};

export const formatConfig = (
  config: ModularEngineConfig
): ModularEngineConfig => {
  const inputConfig = config ? { ...config } : {};
  const reduxConfig = inputConfig.redux || {};

  const customConfigs = reduxConfig.customize || {};

  return {
    ...config,
    redux: {
      customize: {
        ...customConfigs,
        config: customConfigs.config || {},
      },
      reducers: reduxConfig.reducers || {},
      preload: reduxConfig.preload || {},
      middlewares: reduxConfig.middlewares || [],
      reduxMiddlewares: reduxConfig.reduxMiddlewares || [],
    },
    plugins: inputConfig.plugins || [],
  };
};
