import {FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILED} from "../types/note";

const initialState =  {
    loading: false,
    notes: null,
    error: null
};

export default function notes(state=initialState, action={}){
    switch (action.type) {
        case FETCHING_NOTES:
            return {
                ...state,
                loading: true,
            }
        case FETCHING_NOTES_SUCCESS:
            return {
                ...state,
                loading: false,
                notes: action.notes,
                error: null,
            }
        case FETCHING_NOTES_FAILED:
            return {
                ...state,
                loading: false,
                notes: null,
                error: action.error
            }
    
        default:
            return state;
    }
}