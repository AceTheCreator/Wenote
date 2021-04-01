import React, {useState, Suspense, lazy} from 'react';
import {useSpring, animated} from "react-spring";
import logo from '../../static/dark-logo.svg';
import userImg from '../../static/user.svg';
import {
  NavbarContainer, LogoWrapper, NavbarWrapper, AuthWrapper, AuthButton, LoginWrapper
} from './navbar.style';

const Modal = lazy(() => import("../modal/modal"));
const Signup = lazy(() => import("../auth/signup"));
const Login = lazy(() => import("../auth/login"));

export default function navbar() {
  const [modalType, setModalType] = useState(null);
  const [show, setShow] = useState(false);
  
  const spring = useSpring({
    from: {
      marginTop: '-100px'
    },
    to: {
      marginTop: '50px'
    }
  });

  let view;
  if(modalType === "login"){
    view = <Suspense fallback={<div>loading</div>}>
      <Login />
    </Suspense>
  }
  if(modalType === "signup"){
    view = <Suspense fallback={<div>loading</div>}>
      <Signup />
    </Suspense>
  }
  const ModalComponent = animated(Modal);
  return (
        <div>
          <Suspense fallback={<div></div>}>
            <ModalComponent style={spring} show={show} onHide={() => setShow(false)}>
              {view}
            </ModalComponent>
          </Suspense>
            <NavbarContainer>
                <NavbarWrapper>
                    <LogoWrapper>
                    <img width="30px" style={{
                      transform: "rotate(100deg)"
                    }} src={logo} alt="hooknote-logo" /> <span style={{ fontWeight: 'bold' }}>hromenote</span>
                    </LogoWrapper>
                    <AuthWrapper>
                    <LoginWrapper onClick={() => {
                      setModalType('login')
                      setShow(true)
                    }}>
                    <img width="15px" src={userImg} alt="profile-icon" /> <span style={{
                      marginLeft:"3px",
                      fontSize: "15px",
                    }}>
                    Login
                    </span>
                    </LoginWrapper>
                    <AuthButton onClick={() => {
                      setShow(true)
                      setModalType('signup')
                    }} role="link">Sign up</AuthButton>
                    </AuthWrapper>
                </NavbarWrapper>
            </NavbarContainer>
        </div>
  );
}
