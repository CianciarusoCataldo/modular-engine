/**
 * @file internal [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) store init
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  ModularEngineConfig,
  ModularEngineReducer,
  ModularEngineGlobalState,
} from "modular-engine-types";

import { engineInitCompleted } from "modular-engine-tools";

/**
 * Initialize and returns a Redux store, using [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) config parameters
 *
 * @see https://cianciarusocataldo.github.io/modular-engine/docs
 *
 * @param {ModularEngineConfig} config Configuration parameters
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
const initStore = (config: ModularEngineConfig) => {
  const reduxConfig: ModularEngineConfig["redux"] = config.redux;

  let middleware = reduxConfig.reduxMiddlewares;

  reduxConfig.middlewares.forEach((additionalMiddleware) => {
    middleware.push((store) => (next) => (action) => {
      additionalMiddleware(action, store);
      let result = next(action);

      return result;
    });
  });

  const customConfig = (reduxConfig.customize || { config: {} }).config || {};

  const preloadedState: ModularEngineGlobalState = {
    config: {
      appName: config.appName || "",
      ...customConfig,
    },
    ...config.redux.preload,
  };

  const internalReducers: Record<string, ModularEngineReducer<any>> = {
    config: (state = preloadedState.config) => {
      return state;
    },
    ...config.redux.reducers,
  };

  const store = configureStore({
    reducer: combineReducers(internalReducers),
    preloadedState,
    middleware,
    devTools: process.env.NODE_ENV === "development",
  });

  store.dispatch(engineInitCompleted(preloadedState.config));

  return store;
};

export default initStore;
