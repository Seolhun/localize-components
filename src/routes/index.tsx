import * as React from 'react';

import { Route, Switch } from 'react-router-dom';

import routes from './schema';

const Routes = () => {
  return (
    <div>
      <Switch>
        {
          routes.map((route) => {
            return <Route key={route.label} path={route.path} exact={route.exact} component={route.component}/>;
          })
        }
      </Switch>
    </div>
  );
};

export default Routes;
