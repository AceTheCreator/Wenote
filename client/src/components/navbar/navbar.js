import React from 'react';
import logo from '../../static/logo.png';
import {
  NavbarContainer, LogoWrapper, NavbarWrapper, AuthWrapper, AuthButton, LoginWrapper
} from './navbar.style';

export default function navbar() {
  return (
        <div>
            <NavbarContainer>
                <NavbarWrapper>
                    <LogoWrapper>
                    <img src={logo} alt="hooknote-logo" /> <span style={{ fontWeight: 'bold' }}>ooknote</span>
                    </LogoWrapper>
                    <AuthWrapper>
                       <LoginWrapper>Login</LoginWrapper>
                    <AuthButton>Get started</AuthButton>
                    </AuthWrapper>
                </NavbarWrapper>
            </NavbarContainer>
        </div>
  );
}
