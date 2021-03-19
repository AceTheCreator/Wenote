import React, {useEffect, lazy, Suspense} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {useSpring, animated} from "react-spring";
import { AllNotes, EmptyNotes, NoteDetails, NoteList, NoteLists, NoteTitle } from './note.style';
import {getAllNotes} from "../../actions/note";
import {emptyChecker} from "../../utils";

const Loading = lazy(() => import("../skeleton/notes"));
const NoteToggled = lazy(() => import('./noteToggle'));
function Notes({getAllNotes, token, notes, id}) {
    const spring = useSpring({
        from: {
            marginTop: '-100px',
        },
        to: {
            marginTop: '0px'
        },
    });
    useEffect(() => {
        getAllNotes(token)
    },[]);
    const ToggledComponent = animated(NoteToggled);
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
                <ToggledComponent style={spring} />
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
        notes: state.notes
    }
}

Notes.propTypes = {
    getAllNotes: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}
export default connect(mapStateToProps, {getAllNotes})(Notes);