const { closeDrawer, openDrawer } = require("./api/actions");
const plugins = require("./plugins").default;
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

  epics: [
    // (actions$, state$) =>
    //   actions$.pipe(
    //     filter(setDarkMode.match),
    //     withLatestFrom(state$),
    //     tap({
    //       next: ([action, state]) => {
    //         console.log(action);
    //       },
    //     })
    //   ),
  ],

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
  router: {
    basename: "/modular-engine",
    homePage: "Home",
    routes: {
      TestPage: "/test",
      Home: "/",
    },
  },
  i18n: {
    fallbackLanguage: "en",
    supportedLanguages: ["en", "it", "es", "fr", "de"],
    namespaces: ["home"],
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
