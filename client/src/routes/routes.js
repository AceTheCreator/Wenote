import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../components/landing/landing';
import Home from '../pages/home';

function Routes({auth}) {
  if(auth.user){
    return (
      <Switch>
          <Route path="/" exact component={Home} />
      </Switch>
  );
  }
  return (
    <Switch>
        <Route path="/" exact component={Landing} />
    </Switch>
);
}

export default Routes;