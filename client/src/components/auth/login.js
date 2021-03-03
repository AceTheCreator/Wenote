import React, { useState, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useForm } from "react-hook-form";
import { TextSummary } from '../landing/landing.style';
import { AuthButton } from '../navbar/navbar.style';
import { AuthHeader, AuthWrapper, Input, InputWrapper, Invalid } from './auth.style';

const defaultInputColor = "rgb(207, 207, 207)";

export default function login() {
    const [emailColor, setEmailColor] = useState(defaultInputColor);
    const [passwordColor, setPasswordColor] = useState(defaultInputColor)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    useEffect(() => {
        if(errors.email){
            setEmailColor("red");
        };
        if(errors.password){
            setPasswordColor("red")
        }
    },[errors.email]);

    const onInputChange = () => {
        if(!errors.email){
            setEmailColor(defaultInputColor);
        }
       if(!errors.password){
        setPasswordColor(defaultInputColor);
        }
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
          <Input onChange={() => onInputChange()} color={emailColor} type="text" name="email" placeholder="Your email address or username" ref={register({required: true})} />
          {errors.email && <Invalid>Email address is required</Invalid>}
          </InputWrapper>
          <InputWrapper>
          <Input onChange={() => onInputChange()} color={passwordColor} type="text" name="password" ref={register({required: true})} placeholder="password" />
          {errors.password && <Invalid>Email address is required</Invalid>}
          </InputWrapper>
          <InputWrapper>
         <AuthButton style={{
             width: "106%",
             padding: "10px"
         }}>Login</AuthButton>
          </InputWrapper>
          </form>
      </AuthWrapper>
  );
}
