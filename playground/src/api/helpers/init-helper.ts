import { ModularEngineConfig } from "modular-engine-types";

import {
  Formatter,
  ModularCreatorComponent,
  ModularCreatorConfig,
} from "api/modular-creator-types";

export const formatConfig = (
  config?: ModularCreatorConfig
): ModularCreatorConfig => {
  let creatorConfig = config || {};
  return {
    ...creatorConfig,
    core: creatorConfig.core || {},
  };
};

export const parsePlugins = (
  creatorConfig: ModularCreatorConfig,
  engineConfig: ModularEngineConfig
) => {
  let plugins = creatorConfig.plugins || [];
  let enabledPlugins: Record<string, any> = {};
  let externalComponents: ModularCreatorComponent[] = [];
  let internalComponents: ModularCreatorComponent[] = [];
  let engine = { ...engineConfig };
  let creator = formatConfig(creatorConfig);

  let formatters: Formatter[] = [];

  plugins.forEach((plugin) => {
    const pluginOutput = plugin();

    if (pluginOutput.feature) {
      enabledPlugins[pluginOutput.feature] = true;
    }

    if (pluginOutput.field) {
      const field = pluginOutput.field(creator) || {};

      if (field.name) {
        creator[field.name] = field.content || {};
      }
    }

    if (pluginOutput.component) {
      if (pluginOutput.insideAppContainer) {
        internalComponents.push(pluginOutput.component);
      } else {
        externalComponents.push(pluginOutput.component);
      }
    }

    pluginOutput.format && formatters.push(pluginOutput.format);
  });

  if (creator.core?.sync) {
    creator = creator.core.sync(creatorConfig, engine, enabledPlugins);
  }

  formatters.forEach((formatter) => {
    creator = formatter(creator) || creator;
  });

  return {
    externalComponents,
    internalComponents,
    engineConfig: engine,
    creatorConfig: creator,
  };
};
