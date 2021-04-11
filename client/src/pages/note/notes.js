import React, { lazy, Suspense, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useHistory, Link } from "react-router-dom";
import { NoteContainer, NoteListWrapper, NoteWrapper } from "./note.style";
import {
  AddNoteButton,
  Header,
  HeaderTitle,
} from "../../components/note/note.style";
import { IoMdAdd } from "react-icons/io";

const Notes = lazy(() => import("../../components/note/notes"));
const Note = lazy(() => import("../../pages/note/note"));
export default function NotesView() {
  const history = useHistory();
  const { pathname } = history.location;
  const noteId = pathname.split("/")[2];
  const [selectedNote, setSelectedNote] = useState(null);
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });
  useEffect(() => {
    if (noteId) {
      setSelectedNote(noteId);
      console.log(noteId);
    }
  }, [noteId]);
  return (
    <NoteContainer>
      <NoteListWrapper>
        <Header>
          <HeaderTitle>All notes</HeaderTitle>
          <Link to="/notes/new">
            <AddNoteButton
              onClick={() => {
                setSelectedNote("new");
                history.push("/notes/new");
              }}
            >
              <IoMdAdd fontSize="18px" />
            </AddNoteButton>
          </Link>
        </Header>
        <Suspense fallback={<div>loading</div>}>
          <Notes id={selectedNote} />
        </Suspense>
      </NoteListWrapper>
      {!isMobile ? (
        <Suspense fallback={<div>loading</div>}>
          <Note id={selectedNote} />
        </Suspense>
      ) : (
        <div style={{ display: "none" }}></div>
      )}
    </NoteContainer>
  );
}
