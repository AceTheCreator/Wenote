import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { toast } from 'react-toastify';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import ReactTagInput from "@pathofdev/react-tag-input";
import 'react-toastify/dist/ReactToastify.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import "@pathofdev/react-tag-input/build/index.css";
import {connect} from "react-redux";
import {useHistory} from 'react-router-dom';
import {note, createNote, updateNote, getNote} from "../../actions/note";
import { EditorContainer, EditorFooter, SaveButton, SaveWrapper, SelectNote, TagWrapper } from './note.style';
import roll from "../../static/rolling.svg";

function Note({noteId, note, createNote, token, updateNote, getNote, fetchNote}) {
    const history = useHistory();
    const [id, setId] = useState(null);
    const [tags, setTags] = useState([]);
    const [save, setSave] = useState({
        disable: true,
        saving: false,
    });
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const {pathname} = history.location;
    useEffect(() => {
        if(pathname.includes('new') || noteId === 'new'){
            setId('new')
        }else if(noteId !== null){
            setId(noteId);
            getNote(noteId);
        }
    },[pathname]);

    useEffect(() => {
        if(noteId !== null){
            if(fetchNote.note){
                if(fetchNote.note.body){
                const contentState = convertFromRaw(JSON.parse(fetchNote.note.body));
                setEditorState(EditorState.createWithContent(contentState));
                setTags(fetchNote.note.tags);
            }
        };
        if(noteId === "new"){
            setEditorState(EditorState.createEmpty())
            setTags([]);
        }
        }
    },[fetchNote.note, noteId])

    const onEditorStateChange = (editorState) => {
        const data =  {
            id,
            body: convertToRaw(editorState.getCurrentContent()),
            tags: tags,
        }
        console.log(data.body)
        setEditorState(editorState);
        note(data);
        setSave({
            ...save,
            disable: false,
        });
    }
    const callAlert = (type, message) => {
        if(type === "error"){
            toast.error(`❌ ${message}`);
        };
        if(type === "success"){
            toast.success(`🚀 ${message}`);
        }
    }
    const onSave = () => {
        setSave({
            disable: true,
            saving: true,
        });
        const body = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        console.log(body);
        if(id === "new"){
            createNote(token, body, tags).then((res) => {
                setSave({
                    disable: false,
                    saving: false,
                });
                setId(res);
                history.push(`/notes/${res}`);
              callAlert("success", "Note successfully saved")
            }).catch((error) => {
                setSave({
                    disable: false,
                    saving: false,
                });
                callAlert("error", error.response.data);
            })
        }else{
            updateNote(token, id, body, tags).then((res) => {
                setSave({
                    disable: false,
                    saving: false,
                });
              callAlert("success", "Note successfully saved")
            }).catch((error) => {
                setSave({
                    disable: false,
                    saving: false,
                });
                callAlert("error", error.response.data);
            })
        }
    };
    let btnText = "Save note";
    if(save.saving){
        btnText = <img width="20px" src={roll} alt="activity-loader" />
    }
    if(fetchNote.loading){
        return <SelectNote>
            <h2>loading note</h2>
        </SelectNote>
    }
    if(id || fetchNote.note) {
        return <EditorContainer>
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
                <SaveButton type="button" disabled={save.disable} onClick={() => onSave()}>
                    {btnText}
                </SaveButton>
            </SaveWrapper>
        </EditorFooter>
    </EditorContainer>
    }
    if(fetchNote.error){
        return <SelectNote>
        <h2>Oooops!!! {fetchNote.error}</h2>
        </SelectNote>
    }
    return (
        <SelectNote>
        <h2>Select an existing note or create a new one to get started</h2>
        </SelectNote>
    )
};
Note.PropTypes = {
    note: PropTypes.func.isRequired,
    createNote: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    updateNote: PropTypes.func.isRequired,
    getNote: PropTypes.func,
    fetchNote: PropTypes.object.isRequired
};

function mapStateToProps(state){
    return {
        token: state.auth.token,
        fetchNote: state.getNote
    }
}
export default connect(mapStateToProps, {note, createNote, updateNote, getNote})(Note);