/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Landing = styled.div`
margin: 0px auto;
max-width: 900px;
`;
export const LandingContent = styled.div`
padding-top: 20px;
padding-bottom: 50px;
text-align: center;
margin: 0px auto;
max-width: 600px;
`;

export const Heading = styled.h1`
font-weight: bold;
font-size: 30px
`;

export const TextSummary = styled.p`
font-size: 18px;
`;

export const Colored = styled.span`
background: rgb(255, 217, 45);
padding: 5px;
`;
export const LandingBg = styled.div`
text-align: center;
width: 60%;
height: 55vh;
background: url(${(props) => props.bg});
background-position: center;
background-size: cover;
@media(max-width:992px){
    width:100%;
}
`;
