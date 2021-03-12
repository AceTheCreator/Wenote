import React, {lazy, Suspense} from 'react';
import {useMediaQuery} from 'react-responsive';
import { NoteContainer,  NoteListWrapper,  NoteWrapper } from './note.style';

const Header = lazy(() => import('../components/note/header'));
const Notes = lazy(() => import ('../components/note/notes'));
const Note = lazy(() => import('../components/note/note'));
export default function note() {
    const isMobile = useMediaQuery({ query: '(max-width: 992px)' })
    return (
        <NoteContainer>
            <NoteListWrapper>
            <Suspense fallback={<div>loading</div>}>
                <Header />
            </Suspense>
            <Suspense fallback={<div>loading</div>}>
                <Notes />
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
