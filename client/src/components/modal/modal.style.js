/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { animated } from 'react-spring';

export const ModalWrapper = styled.div`
position: fixed;
z-index: 1;
left: 0;
top: 0;
width: 100%;
height: 100%;
overflow: auto;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4); 
`;

export const ModalContent = styled(animated.div)`
background: white;
margin: 0px auto;
border-radius: 10px;
min-height: 30vh;
max-width: 400px;
padding-top: 20px;
padding-bottom: 20px;
margin-top: 100px;
margin-bottom: 100px;
box-sizing: inherit;
`;
