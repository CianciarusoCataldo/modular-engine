import PKG from "../../package.json";

import defaultConfig from "../../src/api/store/internal-slices/config/initial-state";

import storeTests from "../test-suites/store/init";

import engineTests from "../test-suites/engine/init";

import configSelectorsTests from "../test-suites/state-slices/config/selectors";

import pluginIntegrationTest from "../test-suites/plugins/custom-plugins";
import { ModularEngineGlobalState } from "modular-engine-types";

const MOCK_STATE: ModularEngineGlobalState = {
  config: {
    ...defaultConfig,
    redux: {
      ...defaultConfig.redux,
    },
  },
};

describe(`\n        ## Modular-engine v${PKG.version} - unit tests ##        \n`, () => {
  describe("\n      Init", () => {
    describe("\n       engine init\n", () => {
      engineTests();
    });
    describe("\n       store init\n", () => {
      storeTests();
    });
  });

  //describe("\n\n      Helpers", () => {});

  describe("\n\n      Plugins", () => {
    pluginIntegrationTest();
  });

  describe("\n\n      Global state", () => {
    describe("\n        Config slice", () => {
      describe("\n          Selectors\n", () => {
        configSelectorsTests(MOCK_STATE);
      });
    });
  });
});
