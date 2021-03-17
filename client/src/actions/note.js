import {FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILED} from "../types/note";
import api from "../api/note";

export const getNote = (id) => () => {
    return api.retrieve(id)
}

export const getAllNotes = (token) => (dispatch) => {
    dispatch({
        type: FETCHING_NOTES
    });
    console.log(token);
    return api.all(token).then((res) => {
        dispatch({
            type: FETCHING_NOTES_SUCCESS,
            notes: res
        })
    }).catch((err) => {
        console.log(err.response);
        dispatch({
            type: FETCHING_NOTES_FAILED,
            error: err.response.data
        });
    })
}

export const updateNote = (token, noteId, title, body, tags) => () => {
    return api.update(token, noteId, title, body, tags)
}

export const deleteNote = (token, noteId) => () => {
    return api.delete(tokem, noteId);
}