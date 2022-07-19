import { ModularEngineConfig } from "modular-engine-types";
import { ModularCreatorConfig } from "./modular-creator-types";

export type Init = (props: {
  appConfig?: ModularCreatorConfig;

  engine?: ModularEngineConfig;

  /** Callback called at the end of the init process */
  onComplete?: (App: () => JSX.Element) => any;

  /** Callback called before any init operation */
  onStart?: () => any;
}) => Promise<{ App: () => JSX.Element }>;
