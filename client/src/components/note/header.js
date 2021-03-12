import React from 'react'
import { AddNoteButton, Header, HeaderTitle } from './note.style'
import {IoMdAdd} from "react-icons/io";

export default function header() {
    return (
        <Header>
            <HeaderTitle>All notes</HeaderTitle>
            <div>
            <AddNoteButton>
                <IoMdAdd fontSize="18px" />
            </AddNoteButton>
            </div>
        </Header>
    )
}
