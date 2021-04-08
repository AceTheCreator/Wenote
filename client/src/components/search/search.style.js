import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
`;

export const Form = styled.form`
  margin-top: 10px;
  width: 100%;
  border: 1px solid #161616;
  padding: 2px;
  padding-left: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    margin-top: 10px;
    padding: 0px;
  }
`;

export const FormInput = styled.input`
  border: none;
  background: transparent;
  &:focus {
    outline: none;
  }
`;
