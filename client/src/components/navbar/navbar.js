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
                    <img style={{
                      transform: 'rotate(180deg)'
                    }} src={logo} alt="hooknote-logo" /> <span style={{ fontWeight: 'bold' }}>enote</span>
                    </LogoWrapper>
                    <AuthWrapper>
                    <LoginWrapper>Login</LoginWrapper>
                    <AuthButton role="link">Sign up</AuthButton>
                    </AuthWrapper>
                </NavbarWrapper>
            </NavbarContainer>
        </div>
  );
}
