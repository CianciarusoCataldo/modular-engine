import { PageRouterSettings } from "./types";

import { ModularCreatorComponent } from "api/modular-creator-types";

import { Redirect, Route, Router, Switch } from "react-router-dom";

const AppRouter: ModularCreatorComponent<{ pages?: PageRouterSettings }> = ({
  creatorConfig,
}) => {
  const routes = creatorConfig?.pages?.routes || {};

  const homeRoute = creatorConfig?.pages?.homePage || "";

  const renderCallback =
    creatorConfig?.pages?.render || ((route: string) => () => <div />);

  return (
    <Router history={creatorConfig?.pages?.history!}>
      <Switch>
        {Object.keys(routes).map((route) => (
          <Route
            component={renderCallback(route)}
            key={route}
            exact
            path={routes[route]}
          />
        ))}
        <Redirect to={homeRoute} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
