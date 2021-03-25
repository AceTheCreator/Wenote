import {combineReducers} from "redux";
import auth from "./auth";
import notes from './notes';
import note from './note'
import getNote from "./getNote";

export default combineReducers({
    auth,
    notes,
    note,
    getNote,
});