import { ModularEngineConfig, ModularEngineStore } from "modular-engine-types";

import { ModularCreatorConfig } from "api/modular-creator-types";
import App from "api/components/App";
import { parsePlugins } from "api/helpers/init-helper";

/**
 * Modular main app, rendered at the end of the init process.
 *
 * @param {ModularEngineStore} store redux store, used to drive app components (enhanced with `modular-engine`)
 * @param {AppConfig} config app config, to determine which components will be rendered and where
 * @param {ModularEngineConfig} engine app engine config, the same config file passed to modular-engine initStore function
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2022 Cataldo Cianciaruso
 */
const initModularCreator = ({
  creatorConfig,
  engineConfig,
  store,
}: {
  creatorConfig?: ModularCreatorConfig;
  engineConfig?: ModularEngineConfig;
  store?: ModularEngineStore;
}) => {
  if (store && creatorConfig && engineConfig) {
    const {
      externalComponents,
      internalComponents,
      creatorConfig: outputCreatorConfig,
    } = parsePlugins(creatorConfig, engineConfig);
    return App({
      externalComponents,
      internalComponents,
      creatorConfig: outputCreatorConfig,
      store,
    });
  } else {
    return <div />;
  }
};

export default initModularCreator;
