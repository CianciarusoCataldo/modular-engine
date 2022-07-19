import { ModularEngineStore, ModularEngineConfig } from "modular-engine-types";

export type Formatter<T extends Record<string, any> = {}> = (config: T) => T;

export type ModularCreatorProps<T extends Record<string, any> = {}> = {
  creatorConfig: ModularCreatorConfig<T>;
  store?: ModularEngineStore;
};

export type ModularCreatorComponent<T = {}, K = {}> = (
  props: ModularCreatorProps<T> & K
) => JSX.Element;

export type ModularCreatorFormatter<T extends Record<string, any> = {}> = (
  props: ModularCreatorProps<T>
) => ModularCreatorProps<T>;

export type ModularCreatorPlugin<T extends Record<string, any> = {}> = () => {
  component?: ModularCreatorComponent<T>;
  feature?: string;
  field?: (creatorConfig: ModularCreatorConfig<T>) => {
    name: string;
    content?: Record<string, any>;
  };
  insideAppContainer?: boolean;
  format?: Formatter<ModularCreatorConfig>;
};

export type ModularCreatorConfig<T extends Record<string, any> = {}> = {
  core?: {
    sync?: (
      creatorConfig: ModularCreatorConfig,
      engineConfig: ModularEngineConfig,
      enabledPlugins: Record<string, any>
    ) => ModularCreatorConfig;
  };

  debug?: boolean;

  plugins?: ModularCreatorPlugin[];

  /** Preloader element, displayed during loading (as fallback) */
  preloader?: () => JSX.Element;

  /** Error custom component, rendered when an error is catched by the App Error Boundary (if not set, the default error fallback will be used) */
  error?: () => JSX.Element;

  /** Header custom component (if not set, header won't be rendered) */
  header?: () => JSX.Element;

  /** Footer custom component (if not set, footer won't be rendered) */
  footer?: () => JSX.Element;

  /** Custom component, rendered below the router, before the footer */
  content?: () => JSX.Element;

  modalNamepsace?: string;
} & T &
  Record<string, any>;
