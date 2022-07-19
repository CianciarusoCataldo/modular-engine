import "assets/styles";

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

let ModularApp: any = null;
let engineParams: any = null;

import("./modular-engine-preview").then(({ initEngine }) => {
  import("./engine.config").then(({ default: engineConfig }) => {
    engineParams = initEngine(engineConfig);
  });
});

import("./api/core/init").then(({ default: createModularApp }) => {
  import("./app.config").then(({ default: creatorConfig }) => {
    ModularApp = (args: any) =>
      createModularApp({
        ...args,
        creatorConfig: creatorConfig,
      });
  });
});

const check = () => {
  if (engineParams != null && ModularApp != null) {
    import("react-dom").then(({ render }) => {
      render(
        ModularApp({
          store: engineParams.store,
          engineConfig: engineParams.config,
          enginePlugins: engineParams.enabledPlugins,
        }),
        document.getElementById("root"),
        () => {
          let Preloader = document.getElementById("preloader");
          if (Preloader) Preloader.style.visibility = "hidden";
        }
      );
    });
  } else {
    setTimeout(() => {
      check();
    }, 10);
  }
};

check();
