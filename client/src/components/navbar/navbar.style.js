/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const NavbarContainer = styled.div`
background: transparent;
border-bottom: 1px solid rgb(240, 240, 240);
width: 100%
`;

export const NavbarWrapper = styled.div`
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
`;

export const LogoWrapper = styled.div`
display: flex;
align-items: center;
@media(max-width:992px){
    justify-content: center;
}
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
&:disabled{
    background: rgb(173, 173, 173);
    cursor: not-allowed
}
`;

export const AfterAuthNav = styled.div`
position: sticky;
width: 15%;
background-color: #161616;
color: white;
padding-top: 10px;
padding-bottom: 10px;
height: 100vh;
z-index: 999;
top: 0;
`;

export const AfterAuthWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: column;
height: 95vh;
@media(max-width: 992px){
    align-items: center;
}
@media(min-width: 992px){
    margin-left: 10px;
    margin-right: 10px;
}
`;

export const Logo = styled.img`
width: 25px;
`;

export const LogoText = styled.span`
font-weight: bold;
padding-left: 5px;
@media(max-width:992px){
    display: none;
}
`;

export const NavLinks = styled.div`
`;

export const NavLink = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
margin-top: 20px;
padding: 10px;
border-radius: 5px;
cursor: pointer;
color: #b6b6b6;
&:hover{
    background: #202020;
    transition: 0.3s ease-in;
    color: white;
}
`;

export const ActiveNavLink = styled(NavLink)`
  background: #202020;
  color: white;

`;

export const NavText = styled.span`
margin-left: 20px;
font-size: 15px;
font-weight: bold;
@media(max-width:992px){
    display: none;
}
`;