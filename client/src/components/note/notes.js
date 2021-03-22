import React, {useEffect, lazy, Suspense} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { AllNotes, EmptyNotes, NoteDetails, NoteList, NoteLists, NoteTitle } from './note.style';
import {getAllNotes} from "../../actions/note";
import {emptyChecker} from "../../utils";

const Loading = lazy(() => import("../skeleton/notes"));
const NoteToggled = lazy(() => import('./noteToggle'));
function Notes({getAllNotes, token, notes, id, note}) {
    useEffect(() => {
        console.log("hell")
        getAllNotes(token)
    },[]);
    if(notes.loading){
        return <Suspense fallback={<div></div>}>
        <Loading />
    </Suspense>
    }
    if(emptyChecker(notes.notes) && !id){
        return <EmptyNotes>
           You don't have any notes yet, click on the button above to create your first note
        </EmptyNotes>
    }
    return (
        <AllNotes>
            {id ? <Suspense fallback={<div>loading</div>}>
                <NoteToggled note={note} />
            </Suspense>  : <div></div>}
                {emptyChecker(notes.notes) ? <div></div> : <NoteLists>
                    {notes.notes.map((i) => {
                    return <NoteList>
                    <NoteTitle>hello world</NoteTitle>
                    <NoteDetails>ndknsklnslkndkndlndklndklnl</NoteDetails>
                    </NoteList>
                })}
                </NoteLists> }
        </AllNotes>
    )
}


function mapStateToProps(state){
    return {
        token: state.auth.token,
        notes: state.notes,
        note: state.note.state
    }
}

Notes.propTypes = {
    getAllNotes: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    note: PropTypes.note
}
export default connect(mapStateToProps, {getAllNotes})(Notes);