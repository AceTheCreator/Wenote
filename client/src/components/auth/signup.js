import React, {useState} from 'react';
import { GoogleLogin } from 'react-google-login';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { useForm } from "react-hook-form";
import { TextSummary } from '../landing/landing.style';
import { AuthButton } from '../navbar/navbar.style';
import {signup, oauthSignup} from "../../actions/auth"
import { AuthHeader, AuthWrapper,InputWrapper, Invalid, GlobalMessage } from './auth.style';
import roll from "../../static/rolling.svg";

function Signup(props) {
    const [submit, setSubmit] = useState({
        submitting: false,
        disabled: false,
        error: null
    });
    const { register, handleSubmit, errors } = useForm();

    if(errors.email){
        errors.email.ref.className = "error-input"
    };
    if(errors.password){
        errors.password.ref.className = "error-input"
    }
    if(errors.fullname){
        errors.fullname.ref.className = "error-input"
    }
    const onInputChange = (e) => {
        if(!errors.email){
           e.target.className = ""
        }
       if(!errors.password){
           e.target.className = ""
        }
        if(!errors.fullname){
            e.target.className = ""
         }
    }
    const onSubmit = (data) => {
        setSubmit({submitting: true, disabled: true});
        props.signup(data.fullname, data.email, data.password).then(() => {
            window.location.href = "/";
        }).catch((error) => {
            setSubmit({submitting: false, disabled: false, error: error.response.data});
            setTimeout(() => {
                setSubmit({...submit, error: null})
            }, 4000)
        })
    };
    const responseGoogle = (response) => {
        console.log(response);
        if(response.tokenId){
            props.oauthSignup(response.tokenId).catch((error) => {
                setSubmit({
                    error: error.response.data
                });
                setTimeout(() => {
                    setSubmit({...submit, error: null})
                }, 4000)
            });
        }else{
            setSubmit({...submit, error: "google authorization failed"})
        }
      }
  return (
      <AuthWrapper>
          <AuthHeader>Create an account</AuthHeader>
          {submit.error ? <GlobalMessage>{submit.error}</GlobalMessage> : <div></div>}
          <TextSummary style={{fontSize:"16px"}}>Continue with your google account</TextSummary>
          <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Sign up with Google"
          cookiePolicy={'single_host_origin'}
          className="google-auth"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          />
          <TextSummary style={{fontSize:"16px"}}>Or</TextSummary>
          <form onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
          <input onChange={(e) => onInputChange(e)} type="text" name="fullname" placeholder="fullname" ref={register({
            required: "fullname field cannot be blank",
            minLength: {
                value: 4,
                message: "at-least 4 characters are required for password"
            }})}  />
          <Invalid>{errors.fullname && errors.fullname.message}</Invalid>
          </InputWrapper>
          <InputWrapper>
          <input onChange={(e) => onInputChange(e)} type="text" name="email" placeholder="email address" ref={register({
            required: "email field cannot be blank",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "a valid email address is required",
            },
          })} />
          <Invalid>{errors.email && errors.email.message}</Invalid>
          </InputWrapper>
          <InputWrapper>
          <input onChange={(e) => onInputChange(e)} type="password" name="password" ref={register(
              {required: "password field cannot be blank",
            minLength: {
                value: 6,
                message: "at-least 6 characters are required for password"
            }})} 
              placeholder="password" />
         <Invalid>{errors.password && errors.password.message}</Invalid>
          </InputWrapper>
          <InputWrapper>
          <AuthButton disabled={submit.disabled} style={{
             width: "106%",
             padding: "10px",
             display: "flex",
             justifyContent:"center"
         }}>{
             submit.submitting ? <img src={roll} alt="activity-loader" width="20px" /> : <div>Create account</div>
         }</AuthButton>
          </InputWrapper>
          </form>
      </AuthWrapper>
  );
}

Signup.propTypes = {
    signup: PropTypes.func.isRequired,
    oauthSignup: PropTypes.func.isRequired
}

export default connect(null, {signup, oauthSignup})(Signup)