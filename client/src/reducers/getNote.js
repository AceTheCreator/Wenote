import {FETCHING_NOTE, FETCHING_NOTE_FAILED, FETCHING_NOTE_SUCCESS} from "../types/note";

export default function getNote (state={}, action={}){
    switch (action.type) {
        case FETCHING_NOTE:
            return {
                ...state,
                loading: true,
            }
        case FETCHING_NOTE_SUCCESS:
            return {
                ...state,
                loading: false,
                note: action.note,
            }
        case FETCHING_NOTE_FAILED:
            return {
                ...state,
                loading: false,
                note: null,
                error: action.error,
            }
        default:
            return state;
    }
}