import React, {lazy, Suspense} from 'react';
import { NoteWrapper } from './note.style';

const Note = lazy(() => import('../../components/note/note'));

export default function note({id}) {
    return (
        <NoteWrapper>
            <Suspense fallback={<div>loading</div>}>
            <Note noteId={id} />
        </Suspense>
        </NoteWrapper>
    )
}
