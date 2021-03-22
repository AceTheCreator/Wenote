import styled from "styled-components";

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
font-size: 18px;
margin: 0;
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis; 
`;

export const NoteDetails = styled.p`
padding-top: 5px;
padding-bottom: 5px;
font-size: 16px;
color: rgb(238, 238, 238);
white-space: nowrap; 
overflow: hidden;
text-overflow: ellipsis; 
margin: 0
`;

export const NoteDate = styled.span`
color: rgb(153, 180, 255);
font-size: 13px;
padding-bottom: 5px;
`;

export const EmptyNotes = styled.div`
padding-top: 300px;
padding-bottom: 300px;
text-align: center;
`;

export const SelectNote = styled.div`
text-align: center;
padding: 1rem;
`;

export const EditorContainer = styled.div`

`;

export const EditorFooter = styled.div`
width: 100%;
position: fixed;
bottom: 0;
background: white;
padding: 10px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const TagWrapper = styled.div`
width: 40%;
`;

export const SaveWrapper = styled.div`
width: 50%;

`;

export const SaveButton = styled.button`
background: green;
border-radius: 50px;
padding: 2px;
text-align: center;
`;

export const TagsLists = styled.ul`
list-style: none;
display: flex;
align-items: center;
margin-left: -5px;
padding: 0px;
padding-bottom: 5px;
`;

export const TagList = styled.li`
margin-left: 5px;
background: #e1e1e1;
text-align: center;
font-size: 0.85rem;
color: black;
border-radius: 3px;
padding: 0 .46875em
`;