import { ModularCreatorComponent } from "api/modular-creator-types";
import { driveWithDarkMode } from "api/utils";
import { Container } from "modular-ui-components";
import React from "react";

import { Provider } from "react-redux";
import ErrorBoundary from "../AppErrorBoundary";

const App: ModularCreatorComponent<
  {},
  {
    internalComponents: ModularCreatorComponent[];
    externalComponents: ModularCreatorComponent[];
  }
> = ({ creatorConfig, store, externalComponents, internalComponents }) => {
  const CustomContent = creatorConfig?.content;
  const HeaderContent = creatorConfig?.header;
  const FooterContent = creatorConfig?.footer;
  const Preloader = creatorConfig?.preloader;
  const AppContainer = driveWithDarkMode(Container);

  return (
    <React.Suspense fallback={Preloader ? <Preloader /> : <div />}>
      <ErrorBoundary fallback={creatorConfig?.error}>
        <Provider store={store!}>
          {externalComponents.map((ExternalComponent, key) => (
            <div key={`plugin_${key}`}>
              <ExternalComponent creatorConfig={creatorConfig} store={store} />
            </div>
          ))}
          <div
            id="app-container"
            style={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {HeaderContent && (
              <header
                style={{
                  position: "relative",
                  top: "0",
                  right: "0",
                  left: "0",
                  width: "100%",
                }}
              >
                <AppContainer>
                  <HeaderContent />
                </AppContainer>
              </header>
            )}
            <div style={{ height: "100%", overflow: "auto", width: "100%" }}>
              {internalComponents.map((InternalComponent, key) => (
                <div key={`plugin_${key}`}>
                  <InternalComponent
                    creatorConfig={creatorConfig}
                    store={store}
                  />
                </div>
              ))}
            </div>
            {CustomContent && <CustomContent />}
            {FooterContent && (
              <footer
                style={{
                  width: "100%",
                  bottom: "0",
                  left: "0",
                  right: "0",
                }}
              >
                <AppContainer>
                  <FooterContent />
                </AppContainer>
              </footer>
            )}
          </div>
        </Provider>
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default App;
