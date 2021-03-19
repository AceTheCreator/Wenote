import React, {useEffect, useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';

function Note({noteId}) {
    const history = useHistory();
    const [id, setId] = useState(null);
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const {hash} = history.location;
    useEffect(() => {
        if(hash.includes('new') || noteId === 'new'){
            setId('new')
        }
    },[hash, id]);
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
    }
    console.log(convertToRaw(editorState.getCurrentContent()));
    if(id){
        return(
            <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="note-editor"
            onEditorStateChange={onEditorStateChange}
            />
        )
    }
    return (
        <div>
            <h1>Hello im a note</h1>
        </div>
    )
};

export default connect(null, null)(Note);