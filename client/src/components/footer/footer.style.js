import styled from "styled-components";
import {animated} from "react-spring";


export const Footer = styled(animated.footer)`
position: sticky;
display: flex;
justify-content: space-between;
align-items: center;
margin: 0px auto;
max-width: 1400px;
height: 7vh;
@media(max-width:992px){
    padding-left: 5px;
    padding-right: 5px;
}
@media(max-width:420px){
    flex-direction: column;
    background: white;
}
`;

export const FooterLeft = styled.div`
font-size: 18px;
`;

export const FooterRight = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
margin-left: -10px;
@media(max-width:420px){
    margin-top: 10px;
}
`;

export const SocialWrapper = styled.div`
padding: 5px;
cursor: pointer;
text-align: center;
border-radius: 5px;
margin-left: 10px;
background: white;
box-shadow: 2px 2px 10px 2px rgb(235, 235, 235);
&:hover{
    background: #666ee8;
    transition: 0.5s ease-in;
}
@media(max-width:420px){
    margin-top: 20px;
}
`;