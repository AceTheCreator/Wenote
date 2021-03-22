import React from 'react';
import moment from 'moment';
import {useSpring, animated} from "react-spring";
import { NoteDate, NoteDetails, NoteList, NoteLists, NoteTitle, TagList, TagsLists } from './note.style'

export default function noteToggle({note}) {
    const spring = useSpring({
        from: {
            marginTop: '-100px',
        },
        to: {
            marginTop: '0px'
        },
    });
    const date = moment(Date.now()).fromNow();
    let title = "";
    let summary = "";
    let tags = [];
    if(note && note.body.blocks[0]){
        title = note.body.blocks[0].text
    }
    if(note && note.body.blocks[1]){
        summary = note.body.blocks[1].text
    }
    if(note && note.tags){
        tags = note.tags;
    }
    console.log(note)
    return (
        <animated.div style={spring}>
            <NoteLists>
            <NoteList>
                <NoteTitle>{title}</NoteTitle>
                <NoteDetails>{summary}</NoteDetails>
                <TagsLists>
                    {tags.map((tag) => <TagList key={tag}>{tag}</TagList>)}
                </TagsLists>
                <NoteDate>{date}</NoteDate>
            </NoteList>
        </NoteLists>
        </animated.div>
    )
}
