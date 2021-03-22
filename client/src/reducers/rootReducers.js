import {combineReducers} from "redux";
import auth from "./auth";
import notes from './notes';
import note from './note'

export default combineReducers({
    auth,
    notes,
    note
});