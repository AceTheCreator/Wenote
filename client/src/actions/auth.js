import {LOGGED_IN, LOGGED_OUT} from "../types/auth";
import api from "../api/auth";

export const login = (username, password) => (dispatch) => {
dispatch({
    type: "Login-dispatch"
});
return api.login(username, password).then((res) => {
    dispatch({
        type: LOGGED_IN,
        user: res
    });
    localStorage.setItem("wenote-token", res);
})
}