import styled from "styled-components";
import {animated} from "react-spring";

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const HeaderTitle = styled.div`
font-size: 18px;
font-weight: bold;
`;

export const AddNoteButton = styled.button`
width: 30px;
height: 30px;
border-radius: 50px;
background: #161616;
border: none;
text-align: center;
color: white;
cursor: pointer;
`;

export const AllNotes = styled.div`
padding-top: 10px;

`;

export const NoteLists = styled.ul`
list-style: none;
padding:0;

`;

export const NoteList = styled.li`
border-bottom: 1px solid rgb(119, 118, 118);
margin-top: 20px;
`;

export const NoteTitle = styled.h6`
font-weight: bold;
font-size: 15px;
margin: 0;
`;

export const NoteDetails = styled.p`
font-size: 15px;
color: rgb(39, 39, 39);
margin: 0
`;

export const NoteDate = styled.span`
color: rgb(4, 32, 85)
`;

export const EmptyNotes = styled.div`
padding-top: 300px;
padding-bottom: 300px;
text-align: center;
`;