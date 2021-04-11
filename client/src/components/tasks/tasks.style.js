import styled from 'styled-components';

export const NewTaskWrapper = styled.form`
  border-bottom: 1px solid rgb(119, 118, 118);
  background: transparent;
  padding: 2px;
  margin-top: 5px;
  padding-bottom: 5px;
`;

export const TitleInput = styled.input`
border: none;
background: transparent;
color: white;
font-size: 18px;
font-weight: bold;
`;

export const DescriptionInput = styled(TitleInput)`
  font-size: 16px;
  font-weight: 400;
  color: rgb(238, 238, 238);
`;


export const SaveTask = styled.button`
  width: 100%;
  background: rgb(133, 165, 255);
  border: none;
  border-radius: 2px;
  padding: 3px;
  cursor: pointer;
`;