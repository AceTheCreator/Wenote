import React from 'react';
import { AllNotes, NoteDetails, NoteList, NoteLists, NoteTitle } from './note.style';

export default function notes() {
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
