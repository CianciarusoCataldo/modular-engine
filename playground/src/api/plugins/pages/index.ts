import { PageRouterPlugin } from "./types";

import AppRouter from "./component";

const pageRouterPlugin: PageRouterPlugin = () => ({
  feature: "pages",
  insideAppContainer: true,
  component: AppRouter,
  field: (creator) => {
    let pagesConfig = creator.pages || {};

    const globalHistory = {
      action: "POP",
      block: () => () => {},
      createHref: (location: any) => {
        return window.location.href;
      },
      go: window.history.go,
      goBack: window.history.back,
      goForward: window.history.forward,
      length: window.history.length,
      location: { ...window.location, state: {} },
      push: window.history.pushState,
      replace: window.history.replaceState,
      listen: () => () => {},
    };

    return {
      name: "pages",
      content: {
        render: pagesConfig.render,
        routes: pagesConfig.routes || {},
        homePage: pagesConfig.homePage || "",
        history: pagesConfig.history || globalHistory,
      },
    };
  },
});

export default pageRouterPlugin;
