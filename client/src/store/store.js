import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../reducers/rootReducers";

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;
