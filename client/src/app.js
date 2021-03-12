import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import Navbar from './components/navbar/navbar';
import {AppContainer} from "./app.style";
import Route from './routes/routes';

function App({auth}) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    if(auth){
      setDisplay("flex");
    }
  },[auth])
  return (
    <AppContainer display={display}>
     <Navbar auth={auth} />
      <Route auth={auth} />
    </AppContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, null)(App);
