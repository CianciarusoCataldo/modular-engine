import { ModularEngineDispatch } from "modular-engine-types";
import { ModularCreatorPlugin } from "api/modular-creator-types";

export type FormsSettings = {
  modals?: Record<string, () => JSX.Element>;
  onClose?: (dispatch: ModularEngineDispatch) => void;
  getDarkMode?: (state: Record<string, any>) => boolean;
  getModalProps?: (state: Record<string, any>) => {
    isVisible: boolean;
    type: string;
  } & Record<string, any>;
};

export type FormsPlugin = ModularCreatorPlugin<{
  forms?: FormsSettings;
}>;
