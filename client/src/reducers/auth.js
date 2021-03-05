import {LOGGED_IN, LOGGED_OUT} from "../types/auth";


export default function user(state={}, action={}){
    switch (action.type) {
        case LOGGED_IN:
            return action.user          
        case LOGGED_OUT:
            return {}
        default:
            return state;
    }
}