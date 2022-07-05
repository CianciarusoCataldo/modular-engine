/** Config state slice */

export {
  getConfig,
  getAppName,
} from "./api/store/internal-slices/config/selectors";

/** Engine init */

export { initEngine } from "./api/core/init";

/** Type definitions */

export {
  ModularEngineConfig,
  ConfigState,
  ModularEngineAction,
  ModularEngineActionCreator,
  ModularEngineCustomConfig,
  ModularEngineCustomState,
  ModularEngineEffect,
  ModularEngineFormatter,
  ModularEngineGlobalState,
  ModularEngineMiddleware,
  ModularEngineParser,
  ModularEnginePlugin,
  ModularEngineReducer,
  ModularEngineReducerCases,
} from "modular-engine-types";

/** Utils */

export {
  computeValue,
  createModularAction,
  createModularReducer,
  createModularSelector,
  fillObject,
} from "modular-utils";
