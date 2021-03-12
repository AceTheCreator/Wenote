import React, {lazy, Suspense} from 'react';
import PropTypes from "prop-types";

const BeforeAuthNav = lazy(() => import('./beforeAuth'));
const AfterAuth = lazy(() => import("./afterAuth"));
export default function Navbar({auth}) {
  if(auth){
    return (
      <Suspense fallback={<div>loading</div>}>
        <AfterAuth />
      </Suspense>
    )
  }
  return (
    <Suspense fallback={<div>loading</div>}>
      <BeforeAuthNav />
    </Suspense>
  )
}


Navbar.propTypes = {
  auth: PropTypes.bool.isRequired
};