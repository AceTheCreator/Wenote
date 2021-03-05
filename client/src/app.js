import React from 'react';
import {connect} from "react-redux";
import Navbar from './components/navbar/navbar';
import Route from './routes/routes';

function App({auth}) {
  return (
    <div>
      {auth.user ? <div></div> : <Navbar />}
      <Route auth={auth} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(App);
