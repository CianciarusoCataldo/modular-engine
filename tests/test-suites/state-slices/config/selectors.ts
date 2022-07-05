import { ModularEngineGlobalState } from "modular-engine-types";

import {
  getAppName,
  getConfig,
} from "../../../../src/api/store/internal-slices/config/selectors";

const runTest = (mockState: ModularEngineGlobalState) => {
  test("getAppName", () => {
    const result = getAppName(mockState);

    expect(result).toBe(mockState.config.appName);
  });

  test("getConfig", () => {
    const result = getConfig(mockState);

    expect(result).toBe(mockState.config);
  });
};

export default runTest;
