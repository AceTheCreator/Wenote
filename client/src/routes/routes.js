import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const BeforeAuthHome = lazy(() => import('../pages/home/beforeAuthHome'));
const Home = lazy(() => import('../pages/home/home'));
const Notes = lazy(() => import('../pages/note/notes'));
const Note = lazy(() => import('../pages/note/note'));
const Search = lazy(() => import('../pages/search/search'));
const Tasks = lazy(() => import('../pages/task/task'));


function Routes({ auth }) {
  const isMobile = useMediaQuery({ query: '(max-width:992px)' });
  if (auth.user) {
    return (
      <Suspense fallback={<div></div>}>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/notes" exact component={Notes} />
         {isMobile ? <Route path="/notes/:id" exact component={Note} /> : <Route path="/notes/:id" exact component={Notes} />}
         <Route path="/search" exact component={Search} />
         <Route path="/tasks" exact component={Tasks} />
      </Switch>
      </Suspense>
    );
  }
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path="/" exact component={BeforeAuthHome} />
        </Switch>
    </Suspense>
  );
}

export default Routes;
