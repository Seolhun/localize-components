import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import routers from './routers';

const Routes = () => {
  return (
    <div>
      <Switch>
        {routers.map((router) => {
          return (
            <Route
              key={router.label}
              path={router.path}
              exact={router.exact}
              component={router.component}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export { routers };

export default Routes;
