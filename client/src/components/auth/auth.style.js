import styled from 'styled-components';

export const AuthWrapper = styled.div`
text-align: center;
margin: 0px auto;
max-width: 350px;

`;

export const AuthHeader = styled.h4`
font-size: 20px;
font-weight: bold;
`;
export const InputWrapper = styled.div`
margin-top: 10px;
text-align: left;
`;
export const Input = styled.input`
width: 100%;
border: 1px solid ${(props) => props.color};
padding: 10px;
border-radius: 5px;
font-size: 14px;
&:focus{
    outline: none;
}
`;

export const Invalid = styled.span`
color: red;
font-size: 14px;
`;

export const GlobalMessage = styled.div`
padding: 10px;
border-radius: 5px;
font-size: 14px; 
font-weight: bold;
background: red;
color: white;
`;