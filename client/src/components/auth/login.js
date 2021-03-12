import React, {useState} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { GoogleLogin } from 'react-google-login';
import { useForm } from "react-hook-form";
import { TextSummary } from '../landing/landing.style';
import { AuthButton } from '../navbar/navbar.style';
import {login, oauthLogin} from "../../actions/auth"
import roll from "../../static/rolling.svg";
import { AuthHeader, AuthWrapper, GlobalMessage, InputWrapper, Invalid } from './auth.style';

function Login(props) {
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
    const onInputChange = (e) => {
        if(!errors.email){
           e.target.className = ""
        }
       if(!errors.password){
           e.target.className = ""
        }
    }
    const onSubmit = (data) => {
        setSubmit({submitting: true, disabled: true});
        props.login(data.email, data.password)
        .catch((error) => {
            console.log(error.response);
            setSubmit({submitting: false, disabled: false, error: error.response.data});
            setTimeout(() => {
                setSubmit({...submit, error: null})
            }, 4000)
        })
    };
    const responseGoogle = (response) => {
        console.log(response);
        if(response.tokenId){
            props.oauthLogin(response.tokenId).catch((error) => {
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
          <AuthHeader>Log in</AuthHeader>
          {submit.error ? <GlobalMessage>{submit.error}</GlobalMessage> : <div></div>}
          <TextSummary style={{fontSize:"16px"}}>Continue with your google account</TextSummary>
          <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          cookiePolicy={'single_host_origin'}
          className="google-auth"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />
          <TextSummary style={{fontSize:"16px"}}>Or</TextSummary>
          <form onSubmit={handleSubmit(onSubmit)}>
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
             submit.submitting ? <img src={roll} alt="activity-loader" width="20px" /> : <div>Login</div>
         }</AuthButton>
          </InputWrapper>
          </form>
      </AuthWrapper>
  );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    oauthLogin: PropTypes.func.isRequired,
}
export default connect(null, {login, oauthLogin}) (Login);