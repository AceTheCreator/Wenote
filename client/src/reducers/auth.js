import {LOGGED_IN, LOGGED_OUT, USER_VERIFIED, USER_VERIFICATION_FAILED} from "../types/auth";

const initialState = {
    token: null,
    user: null,
    error: null
}
export default function user(state=initialState, action={}){
    switch (action.type) {
        case LOGGED_IN:
            return {
                ...state,
                token: action.token
            }
        case USER_VERIFIED:
            return {
                ...state,
               user: action.user
            }
        case USER_VERIFICATION_FAILED:
            return {
                ...state,
                token:null,
                user: null,
                error: action.error
        }               
        case LOGGED_OUT:
            return {}
        default:
            return state;
    }
}