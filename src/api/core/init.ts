/**
 * @file [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) system init
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { ModularEngineConfig } from "modular-engine-types";

import { formatConfig, parsePlugins } from "../helpers/init-helper";
import initStore from "../store/init";

/**
 * Initialize the entire [modular-engine system](https://github.com/CianciarusoCataldo/modular-engine), using Config object parameters,
 * and returns a Redux store, providing also the parsed config object
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @param {Config} config Configuration parameters
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const initEngine = (config?: ModularEngineConfig) => {
  let inputConfig = formatConfig(config);

  const pluginsOutput = parsePlugins(inputConfig);

  inputConfig = pluginsOutput.config;

  inputConfig = pluginsOutput.before(inputConfig);

  const store = initStore(inputConfig);

  inputConfig = pluginsOutput.after(inputConfig, store);

  return {
    store,
    config: { ...inputConfig, enabledPlugins: pluginsOutput.enabledPlugins },
  };
};
