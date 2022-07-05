import { initEngine } from "../../../src/api/core/init";

const runTest = () => {
  test("without config parameter", () => {
    initEngine({
      config: undefined,
    });
  });
  test("with empty config", () => {
    initEngine({
      config: {},
    });
  });
  test("with defined config", () => {
    initEngine({
      config: {
        features: {
          modal: false,
          ui: true,
        },
        redux: { reducers: {}, preload: {} },
      },
    });
  });
};

export default runTest;
