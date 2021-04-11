import {combineReducers} from "redux";
import auth from "./auth";
import notes from './notes';
import note from './note'
import tasks from './tasks';
import getNote from "./getNote";

export default combineReducers({
    auth,
    notes,
    note,
    getNote,
    tasks,
});