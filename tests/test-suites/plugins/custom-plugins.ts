import { ModularEngineConfig, ModularEnginePlugin } from "modular-engine-types";
import { initEngine } from "../../../src/api/core/init";
import { formatConfig } from "../../../src/api/helpers/init-helper";

const runTests = () => {
  const preInit = jest.fn();
  const postInit = jest.fn();
  const after = jest.fn();
  const before = jest.fn();
  const format = jest.fn();

  const clearMocks = () => {
    [preInit, postInit, after, before, format].forEach((func) =>
      func.mockClear()
    );
  };

  const steps: ReturnType<ModularEnginePlugin> = {
    preInit: (config, plugins) => {
      preInit();
    },
    postInit: (config, store, plugins) => {
      postInit();
    },
    after: ({ config, store }) => {
      after();
      return config;
    },
    before: ({ config }) => {
      before();
      return config;
    },
    format: (config, plugins) => {
      format();
      return config;
    },
  };

  let config: ModularEngineConfig = formatConfig({});

  describe("\n\n        custom plugins integration\n", () => {
    beforeEach(() => {
      clearMocks();

      config.plugins = [];
    });
    test("every plugin step callback is executed", () => {
      config.plugins.push(() => ({
        feature: "test-plugin1",
        create: (config) => ({
          field: "test",
          content: { testField: "test-field" },
        }),
        redux: (config) => ({
          slice: "test",
          initialState: config.test,
          reducerCases: {},
          reducer: (state, action) => state,
        }),
        ...steps,
      }));

      initEngine({ config });

      expect(format).toBeCalled;
      expect(before).toBeCalled;
      expect(preInit).toBeCalled;
      expect(postInit).toBeCalled;
      expect(after).toBeCalled;
    });

    test("plugin custom fields are preserved and restored when deleted", () => {
      config.plugins.push(() => ({
        feature: "test-plugin1",
        create: (config) => null,
        format: (config, plugins) => ({}),
        before: ({ config }) => {},
      }));

      config.plugins.push(() => ({
        feature: "test-plugin2",
        create: (config) => ({
          field: "testPlugin2",
          content: { test: "test" },
        }),
      }));

      const result = initEngine({
        config,
      }).config;

      expect(result).toHaveProperty("testPlugin2");
    });

    test("if feature field is returned, plugin will be included inside enabled plugins list", () => {
      config.plugins.push(() => ({
        feature: "test-plugin1",
        create: (config) => null,
        format: (config, plugins) => ({}),
        before: ({ config }) => {},
        redux: (config) => ({
          slice: "testPlugin",
          reducerCases: {},
        }),
      }));

      config.plugins.push(() => ({
        feature: "test-plugin2",
        create: (config) => ({
          field: "testPlugin2",
          content: { test: "test" },
        }),
      }));

      const result = initEngine({
        config,
      }).enabledPlugins;

      expect(result).toStrictEqual({
        "test-plugin1": true,
        "test-plugin2": true,
      });
    });

    test("if a plugin gives error, is skipped", () => {
      initEngine({
        config: {
          plugins: [
            () => {
              if (config) {
                throw new Error("error into plugin");
              }
              return {
                ...steps,
              };
            },
          ],
        },
      });

      expect(format).not.toBeCalled;

      expect(before).not.toBeCalled;

      expect(preInit).not.toBeCalled;

      expect(postInit).not.toBeCalled;

      expect(after).not.toBeCalled;
    });
  });
};

export default runTests;
