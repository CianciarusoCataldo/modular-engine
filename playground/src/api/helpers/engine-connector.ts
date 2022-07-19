import {
  ModularEngineDispatch,
  ModularEngineConfig,
} from "modular-engine-types";

import { ModularCreatorConfig } from "api/modular-creator-types";
import { closeModal } from "modular-plugins";
import { closeDrawer } from "app/actions";

export const syncConfigWithEngine = (
  creatorConfig: ModularCreatorConfig,
  engineConfig: ModularEngineConfig,
  enabledPlugins: Record<string, any>
): ModularCreatorConfig => {
  let config = { ...creatorConfig };

  if (enabledPlugins.pages) {
    if (engineConfig.enabledPlugins?.router) {
      config.pages.history = engineConfig.history;
      config.pages.homePage = engineConfig.router.homeRoute || "";
      config.pages.routes = engineConfig.router.routes || {};
    }
  }

  if (enabledPlugins.forms) {
    if (engineConfig.enabledPlugins?.modal) {
      config.forms.getModalProps = (state: any) => state.modal;
      config.forms.onClose = (dispatch: ModularEngineDispatch) => {
        dispatch(closeModal());
      };

      config.forms.getDarkMode = (state: any) => state.ui.darkMode;
    }
  }

  if (enabledPlugins.drawer) {
    if (engineConfig.enabledPlugins?.ui) {
      config.drawer.getDrawerVisibility = (state: any) => state.ui.isDrawerOpen;
      config.drawer.getDarkMode = (state: any) => state.ui.darkMode;
      config.drawer.onClose = (dispatch: any) => {
        dispatch(closeDrawer());
      };
    }
  }

  return config;
};
