import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { TextSummary } from '../landing/landing.style';
import { AuthButton } from '../navbar/navbar.style';
import { AuthHeader, AuthWrapper, Input, InputWrapper } from './auth.style';

export default function login() {
  return (
      <AuthWrapper>
          <AuthHeader>Log in</AuthHeader>
          <TextSummary style={{fontSize:"16px"}}>Continue with your google account</TextSummary>
          <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          cookiePolicy={'single_host_origin'}
          className="google-auth"
          />
          <TextSummary style={{fontSize:"16px"}}>Or</TextSummary>
          <InputWrapper>
          <Input type="text" placeholder="Your email address or username" />
          </InputWrapper>
          <InputWrapper>
          <Input type="text" placeholder="password" />
          </InputWrapper>
          <InputWrapper>
         <AuthButton style={{
             width: "106%",
             padding: "10px"
         }}>Login</AuthButton>
          </InputWrapper>
      </AuthWrapper>
  );
}
