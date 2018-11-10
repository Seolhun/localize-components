import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import schema from './schema';

const Routes = () => {
  return (
    <div>
      <Switch>
        {Object.keys(schema).map((key) => {
          if (!Array.isArray(schema[key])) {
            return (
              <Route
                key={schema[key].label}
                path={schema[key].path}
                exact={schema[key].exact}
                component={schema[key].component}
              />
            );
          }
          return schema[key].map((route) => {
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
