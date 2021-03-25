import React, {useEffect, lazy, Suspense} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { AllNotes, EmptyNotes, NoteDetails, NoteList, NoteLists, NoteTitle, TagsLists, TagList } from './note.style';
import {getAllNotes} from "../../actions/note";
import {emptyChecker} from "../../utils";

const Loading = lazy(() => import("../skeleton/notes"));
const NoteToggled = lazy(() => import('./noteToggle'));
function Notes({getAllNotes, token, notes, id, note}) {
    useEffect(() => {
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
            {id === "new" ? <Suspense fallback={<div>loading</div>}>
                <NoteToggled note={note} />
            </Suspense>  : <div></div>}
                {emptyChecker(notes.notes) ? <div></div> : <NoteLists>
                    {notes.notes.map((i) => {
                    const body = convertFromRaw(JSON.parse(i.body));
                    const editorState = EditorState.createWithContent(body);
                    const raw = convertToRaw(editorState.getCurrentContent());
                    console.log(raw);
                    return <Link style={{
                        color: "white"
                    }} to={`/notes/${i._id}`}>
                    <NoteList>
                    <NoteTitle>{raw.blocks[0].text}</NoteTitle>
                    <NoteDetails>{raw.blocks[1].text}</NoteDetails>
                    <TagsLists>
                    {i.tags.map((tag) => <TagList key={tag}>{tag}</TagList>)}
                    </TagsLists>
                    </NoteList>
                    </Link>
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