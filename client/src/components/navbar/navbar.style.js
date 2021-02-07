/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NavbarContainer = styled.div`
border-bottom: 1px solid rgb(240, 240, 240);
`;

export const NavbarWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0px auto;
max-width: 1300px;
height: 7vh;
`;

export const LogoWrapper = styled.div`
width: 40px;
display: flex;
align-items: center;
`;

export const AuthWrapper = styled.div`
display: flex;
align-items: center;
`;
export const LoginWrapper = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
cursor: pointer;
`;
export const AuthButton = styled.button`
padding: 8px;
background: #666ee8;
border: none;
border-radius: 5px;
color: white;
height: auto;
width: 80px;
font-size: 14px;
cursor: pointer;
`;
