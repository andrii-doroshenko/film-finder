import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;

  &:focus {
    outline-color: #333;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;
