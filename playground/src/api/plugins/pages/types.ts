import { ModularCreatorPlugin } from "api/modular-creator-types";
import { History } from "history";

export type PageRouterSettings = {
  /** Custom route rendering function, to return the right component based on the given route (if not set, router won't be loaded) */
  render?: (route: string) => () => JSX.Element;
  routes?: Record<string, string>;
  homePage?: string;
  history?: History;
};

export type PageRouterPlugin = ModularCreatorPlugin<{
  pages?: PageRouterSettings;
}>;
