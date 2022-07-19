import { ModularEngineDispatch } from "modular-engine-types";
import { ModularCreatorPlugin } from "api/modular-creator-types";

export type DrawersPluginSettings = {
  /** App drawer custom content */
  content?: () => JSX.Element;

  /** Drawer position (relative to the window) */
  position?: string;

  /** Drawer position (relative to the window) */
  onClose?: (dispatch: ModularEngineDispatch) => void;

  /** Custom selector to get the drawer visibility */
  getDrawerVisibility?: (state: Record<string, any>) => boolean;

  /** Custom selector to get the dark mode status */
  getDarkMode?: (state: Record<string, any>) => boolean;
};

export type DrawerPlugin = ModularCreatorPlugin<{
  drawer?: DrawersPluginSettings;
}>;
