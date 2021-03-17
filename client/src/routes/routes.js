import React, {lazy, Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../components/landing/landing';

const Home = lazy(() => import('../pages/home'))
const Notes = lazy(() => import('../pages/notes'))

function Routes({auth}) {
  if(auth.user){
    return (
      <Suspense fallback={<div>loadin</div>}>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/notes" exact component={Notes} />
      </Switch>
      </Suspense>
  );
  }
  return (
    <Switch>
        <Route path="/" exact component={Landing} />
    </Switch>
);
}

export default Routes;