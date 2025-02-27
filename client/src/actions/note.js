import {FETCHING_NOTES, FETCHING_NOTES_SUCCESS, FETCHING_NOTES_FAILED, FETCHING_NOTE, FETCHING_NOTE_FAILED, FETCHING_NOTE_SUCCESS} from "../types/note";
import api from "../api/note";

export const createNote = (token, body, tags) => (dispatch) => {
    dispatch({
        type: "CREATE-NOTE"
    });
    return api.create(token, body, tags);
}

export const getNote = (id) => (dispatch) => {
    dispatch({
        type: FETCHING_NOTE
    });
    return api.retrieve(id).then((res) => {
        dispatch({
            type: FETCHING_NOTE_SUCCESS,
            note: res,
        })
    }).catch((error) => {
        dispatch({
            type: FETCHING_NOTE_FAILED,
            error: error.response.data,
        })
    })
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

export const updateNote = (token, noteId, body, tags) => () => {
    return api.update(token, noteId, body, tags)
}

export const deleteNote = (token, noteId) => () => {
    return api.delete(tokem, noteId);
};


export const note = (data) => (dispatch) => {
    dispatch({
        type: "EDITING_NOTE",
        data
    })
}