import { closeDrawer, openDrawer } from "./app/actions";
import plugins from "./plugins";

const engineConfig = {
  appName: "Modular-engine",
  debug: false,
  plugins,
  redux: {
    customize: {
      ui: {
        state: {
          isDrawerOpen: false,
        },
        effects: {
          [closeDrawer.type]: (state, action) => ({
            ...state,
            isDrawerOpen: false,
          }),
          [openDrawer.type]: (state, action) => ({
            ...state,
            isDrawerOpen: true,
          }),
        },
      },
    },
  },
  epics: [],
  ui: { darkMode: true },
  urlChecker: {
    queryParameters: {
      test: ({ config }) => {
        alert("test param");
        return config;
      },
    },
    after: ["test"],
  },
  modal: {
    onModalOpen: [() => console.log("opened")],
  },
  router: {
    basename: "/modular-engine",
    homePage: "Home",
    routes: {
      Home: "/",
      Selectors: "/selectors",
      Actions: "/actions",
    },
  },
  localization: {
    fallbackLanguage: "en",
    supportedLanguages: ["en", "it", "es", "fr", "de"],
    namespaces: ["home", "common"],
    defaultNamespace: "home",
    loadPath: "/modular-engine/locales/{{lng}}/{{ns}}.json",
    titlesNamespace: "page-titles",
  },
  theme: {
    dark: {
      bodyColor: "linear-gradient(to right, #3c4a5f, #4d5f7d)",
    },
    default: {
      bodyColor: "linear-gradient(to right, #eaebec, #cccdcf)",
    },
  },
};

export default engineConfig;
