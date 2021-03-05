import {LOGGED_IN, LOGGED_OUT, USER_VERIFIED, USER_VERIFICATION_FAILED} from "../types/auth";
import api from "../api/auth";

export const login = (username, password) => (dispatch) => {
dispatch({
    type: "Login-dispatch"
});
return api.login(username, password).then((res) => {
    dispatch({
        type: LOGGED_IN,
        token: res
    });
    localStorage.setItem("wenoteToken", res);
})
}

export const signup = (fullname, email, password) => (dispatch) => {
    dispatch({
        type: "Signup-dispatch"
    });
    return api.signup(fullname, email, password).then((res) => {
        dispatch({
            type: LOGGED_IN,
            token: res
        });
        localStorage.setItem("wenoteToken", res);
    })
}

export const oauth = (token) => (dispatch) => {
    dispatch({
        type: "Oauth-dispatch"
    });
    return api.oauth(token).then((res) => {
        dispatch({
            type: LOGGED_IN,
            token: res
        });
        localStorage.setItem("wenoteToken", res);
    })
};

export const verify = (token) => (dispatch) => {
    dispatch({
        type:"Verify-dispatch"
    });
    return api.verify(token).then((res) => {
        dispatch({
            type: USER_VERIFIED,
            user: res
        });
    }).catch((error) => {
        dispatch({
            type: USER_VERIFICATION_FAILED,
            error: error.response.data
        })
    })
}