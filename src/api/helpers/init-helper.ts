/**
 * @file modular-engine init helpers
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { createModularReducer, fillObject } from "modular-utils";
import {
  ModularEngineConfig,
  ModularEngineCustomConfig,
  ModularEngineFormatter,
  ModularEngineParser,
  ModularEngineReducerCases,
  ModularEngineStore,
} from "modular-engine-types";

export const parsePlugins = (config: ModularEngineConfig) => {
  let inputConfig = { ...config };

  let enabledPlugins: Record<string, boolean> = {};
  let formatters: ModularEngineFormatter[] = [];
  let reduxConfigs: ((config: ModularEngineConfig) => {
    slice: string;
    reducerCases: ModularEngineReducerCases<any>;
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
              defaultObj: { state: {}, effects: [] },
            });

          const initialState = reduxConfig.initialState || {};
          const actualState =
            inputConfig.redux.preload[reduxConfig.slice] || {};

          inputConfig.redux.preload[reduxConfig.slice] = {
            ...initialState,
            ...actualState,
            ...input.redux.customize[reduxConfig.slice].state,
          };

          input.redux.reducers[reduxConfig.slice] = createModularReducer({
            initialState: inputConfig.redux.preload[reduxConfig.slice],
            customConfig: inputConfig.redux.customize[reduxConfig.slice],
            internalCases: reduxConfig.reducerCases,
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
