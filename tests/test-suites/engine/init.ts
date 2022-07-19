import { initEngine } from "../../../src/api/core/init";

const runTest = () => {
  test("without config parameter", () => {
    initEngine();
  });
  test("with empty config", () => {
    initEngine({});
  });
  test("with defined config", () => {
    initEngine({
      features: {
        modal: false,
        ui: true,
      },
      redux: { reducers: {}, preload: {} },
    });
  });
};

export default runTest;
