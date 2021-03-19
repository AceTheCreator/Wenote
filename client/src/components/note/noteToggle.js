import React from 'react';
import {useSpring, animated} from "react-spring";
import { NoteDetails, NoteList, NoteLists, NoteTitle } from './note.style'

export default function noteToggle() {
    const spring = useSpring({
        from: {
            marginTop: '-100px',
        },
        to: {
            marginTop: '0px'
        },
    });
    return (
        <animated.div style={spring}>
            <NoteLists>
            <NoteList>
                <NoteTitle>new note</NoteTitle>
                <NoteDetails>hello</NoteDetails>
            </NoteList>
        </NoteLists>
        </animated.div>
    )
}
