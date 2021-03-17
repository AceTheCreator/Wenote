import React, {lazy, Suspense, useState} from 'react';
import {useMediaQuery} from 'react-responsive';
import {useHistory} from "react-router-dom";
import { NoteContainer,  NoteListWrapper,  NoteWrapper } from './note.style';
import { AddNoteButton, Header, HeaderTitle } from '../components/note/note.style'
import {IoMdAdd} from "react-icons/io"

const Notes = lazy(() => import ('../components/note/notes'));
const Note = lazy(() => import('../components/note/note'));
export default function note() {
    const history = useHistory();
    const [selectedNote, setSelectedNote] = useState(null);
    const isMobile = useMediaQuery({ query: '(max-width: 992px)' });
    return (
        <NoteContainer>
            <NoteListWrapper>
                <Header>
                    <HeaderTitle>All notes</HeaderTitle>
                    <div>
                        <AddNoteButton onClick={() => {
                            setSelectedNote('new');
                            history.push('#/new')
                        }}>
                            <IoMdAdd fontSize="18px" />
                        </AddNoteButton>
                    </div>
                </Header>
            <Suspense fallback={<div>loading</div>}>
                <Notes id={selectedNote} />
            </Suspense>
            </NoteListWrapper>
            <NoteWrapper>
            {!isMobile ? <Suspense fallback={<div>loading</div>}>
                <Note />
            </Suspense> : <div style={{display:"none"}}></div> }
            </NoteWrapper>
        </NoteContainer>
    )
}
