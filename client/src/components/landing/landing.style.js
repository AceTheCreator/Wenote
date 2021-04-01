/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {animated} from "react-spring";

export const Landing = styled.div`
margin: 0px auto;
max-width: 900px;
`;
export const LandingContent = styled.div`
padding-top: 20px;
padding-bottom: 0px;
text-align: center;
margin: 0px auto;
max-width: 600px;
@media(max-width:992px){
    padding-left: 5px;
    padding-right: 5px;
}
`;

export const Heading = styled.h1`
font-weight: bold;
font-size: 40px;
line-height: 1.2;
@media(max-width:992px){
    font-size: 35px
}
`;

export const TextSummary = styled.p`
font-size: 20px;
line-height: 1.5;
`;

export const Colored = styled.span`
background: rgb(255, 217, 45);
padding: 5px;
`;
export const LandingBg = styled(animated.div)`
text-align: center;
width: 100%;
height: 55vh;
background: url(${(props) => props.bg});
background-position: center;
background-size: cover;
@media(max-width:992px){
    width:100%;
}
`;

export const Line = styled.span`
&>svg{
    position: absolute;
    margin-left: 3%;
    margin-top: 30px;
    @media(max-width:500px){
        margin-left: -55%;
        margin-top: 70px;
    }
}
`;
