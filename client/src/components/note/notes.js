import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { AllNotes, NoteDetails, NoteList, NoteLists, NoteTitle } from './note.style';
import {getAllNotes} from "../../actions/note";


function Notes({getAllNotes, token, notes}) {
    useEffect(() => {
        getAllNotes(token)
    },[]);
    console.log(notes.notes)
    return (
        <AllNotes>
            <NoteLists>
                {Array(50)
                .fill()
                .map(() => {
                    return <NoteList>
                        <NoteTitle>hello world</NoteTitle>
                        <NoteDetails>ndknsklnslkndkndlndklndklnl</NoteDetails>
                    </NoteList>
                })}
            </NoteLists>
        </AllNotes>
    )
}

function mapStateToProps(state){
    return {
        token: state.auth.token,
        notes: state.notes
    }
}
Notes.propTypes = {
    getAllNotes: PropTypes.func.isRequired
}
export default connect(mapStateToProps, {getAllNotes})(Notes);