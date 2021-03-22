import React, {lazy, Suspense} from 'react';
import { Route, Switch } from 'react-router-dom';
import {useMediaQuery} from "react-responsive";
import Landing from '../components/landing/landing';

const Home = lazy(() => import('../pages/home'))
const Notes = lazy(() => import('../pages/notes'))
const Note = lazy(() => import('../pages/note'));

function Routes({auth}) {
  const isMobile = useMediaQuery({query: '(max-width:992px)'});
  if(auth.user){
    return (
      <Suspense fallback={<div>loadin</div>}>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/notes" exact component={Notes} />
         {isMobile ?  <Route path="/notes/:id" exact component={Note} /> : <Route path="/notes/:id" exact component={Notes} />}
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