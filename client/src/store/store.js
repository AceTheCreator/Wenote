import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers/rootReducers";
import {verify} from "../actions/auth";
import {LOGGED_IN} from "../types/auth";

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk, logger))
)
if (localStorage.wenoteToken) {
   const token = localStorage.wenoteToken;
    store.dispatch({
        type: LOGGED_IN,
        token
    });
    store.dispatch(verify(token))
}
export default store;
