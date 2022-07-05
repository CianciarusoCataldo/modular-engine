/**
 * @file Config state slice selectors, used to get Config parameters directly from global state
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  ConfigState,
  ModularEngineGlobalState,
} from "modular-engine-types";
import { createModularSelector } from "modular-utils";

/**
 * Returns all shared config parameters, saved into the Redux state
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getConfig = (state: ModularEngineGlobalState): ConfigState =>
  state.config;

/**
 * Returns `appName` parameter
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const getAppName = createModularSelector(
  getConfig,
  ({ appName }) => appName
);
