import { createBrowserHistory, History } from "history";

import { useSelector } from "react-redux";

import { getHomePage, getRoutes } from "modular-plugin-router";

import { Redirect, Route, RouteProps, Router, Switch } from "react-router-dom";

import AppContainer from "api/predefined/components/AppContainer";
import { CSSProperties } from "react";

const AppRouter = ({
  renderCallback,
  history,
  style,
}: {
  renderCallback: (route: string) => RouteProps["component"];
  history?: History;
  style?: CSSProperties;
  className?: string;
}) => {
  const HOME = useSelector(getHomePage);

  const ROUTES = useSelector(getRoutes);

  return (
    <AppContainer unstyled style={style}>
      <Router history={history || createBrowserHistory()}>
        <Switch>
          {Object.keys(ROUTES).map((route) => (
            <Route
              component={renderCallback(route)}
              key={route}
              exact
              path={ROUTES[route]}
            />
          ))}
          <Redirect to={HOME} />
        </Switch>
      </Router>
    </AppContainer>
  );
};

export default AppRouter;
