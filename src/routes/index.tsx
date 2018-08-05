import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import routes from './schema';

const Routes = () => {
  return (
    <div>
      <Switch>
        {Object.keys(routes).map(key => {
          if (!Array.isArray(routes[key])) {
            return (
              <Route
                key={routes[key].label}
                path={routes[key].path}
                exact={routes[key].exact}
                component={routes[key].component}
              />
            );
          }
          return routes[key].map(route => {
            return (
              <Route
                key={route.label}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          });
        })}
      </Switch>
    </div>
  );
};

export default Routes;
