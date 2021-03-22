import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import ReactTagInput from "@pathofdev/react-tag-input";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "@pathofdev/react-tag-input/build/index.css";
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {note} from "../../actions/note";
import { EditorContainer, EditorFooter, SaveButton, SaveWrapper, SelectNote, TagWrapper } from './note.style';

function Note({noteId, note}) {
    const history = useHistory();
    const [id, setId] = useState(null);
    const [tags, setTags] = useState([])
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const {pathname} = history.location;
    useEffect(() => {
        if(pathname.includes('new') || noteId === 'new'){
            setId('new')
        }
    },[pathname, id]);

    const onEditorStateChange = (editorState) => {
        const data =  {
            id,
            body: convertToRaw(editorState.getCurrentContent()),
            tags: tags,
        }
        setEditorState(editorState);
        note(data);
    }
    if(id){
        return(
            <EditorContainer>
                <Editor
                editorState={editorState}
                toolbarClassName="note-toolbar"
                wrapperClassName="note-wrapper"
                editorClassName="note-editor"
                onEditorStateChange={onEditorStateChange}
                />
                <EditorFooter>
                    <TagWrapper>
                    <ReactTagInput 
                    tags={tags} 
                    placeholder="Enter note tags"
                    maxTags={3}
                    onChange={(newTags) => {
                        setTags(newTags);
                        onEditorStateChange(editorState)
                    }}
                    />
                    </TagWrapper>
                    <SaveWrapper>
                        <SaveButton>
                            save
                        </SaveButton>
                    </SaveWrapper>
                </EditorFooter>
            </EditorContainer>
        )
    }
    return (
        <SelectNote style={{paddingTop: "300px"}}>
            <h2>Select an existing note or create a new one to get started</h2>
        </SelectNote>
    )
};
Note.PropTypes = {
    note: PropTypes.func.isRequired
}
export default connect(null, {note})(Note);