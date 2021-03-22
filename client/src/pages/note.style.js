import styled from "styled-components";

export const NoteContainer = styled.div`
margin: 0px;
width: 85%;
@media(min-width:992px){
    display: flex;
}
`;
export const NoteWrapper = styled.div`
width: 70%;
@media(max-width:992px){
    width: 85%;
}
`;

export const NoteListWrapper = styled.div`
background:  #202020;
padding: 10px;
color: white;
min-height: 100vh;
@media(min-width:992px){
    width: 30%;
    position: sticky;
    top: 0;
    overflow-y: scroll;
    height: 100vh;
}
width: auto;
`;