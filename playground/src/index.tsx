import "assets/styles/styles.output.css";
import { createBrowserHistory } from "history";

const defaultTheme = {
  header: {
    height: "20%",
  },
  footer: {
    height: "10%",
  },
  router: {
    height: "70%",
  },
  body: {
    darkColor: "",
    lightColor: "",
    initialColor: "",
  },
};

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  navigator.serviceWorker
    .register("./serviceWorker.js", { scope: "/modular-engine/" })
    .then(
      function () {
        console.log("Service worker registration succeeded");
      },
      /*catch*/ function () {
        console.log("Service worker registration failed");
      }
    );
} else {
  console.log("Service workers are not supported.");
}

import("modular-engine-preview").then(({ initEngine }) => {
  let engineConfig = {};

  try {
    engineConfig = require("engine.config").default;
  } catch {
    process.env.NODE_ENV === "development" &&
      console.log("engine.config file not found, using default values");
    engineConfig = {};
  }

  const {
    store,
    config: engineOutput,
    enabledPlugins,
  } = initEngine({ config: engineConfig });
  import("./api/core/init").then(({ default: initApp }) => {
    let theme = defaultTheme;

    try {
      theme = require("theme.config.json");
    } catch (e) {
      process.env.NODE_ENV === "development" &&
        console.log("Theme file not found, using default theme.");
      theme = defaultTheme;
    }

    let config = {};

    try {
      config = require("app.config").default;
    } catch {
      config = {};
    }

    initApp({
      store,
      history: engineOutput.history || createBrowserHistory(),
      config,
      engine: enabledPlugins,
      theme,
    });
  });
});
