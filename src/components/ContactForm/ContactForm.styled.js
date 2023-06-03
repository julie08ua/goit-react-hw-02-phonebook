import styled from 'styled-components';

export const ContactFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 40px;
  border: 0,5px solid grey;
  box-shadow: 0 1px 6px 0 #20212447;
  border-radius: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  font-size: 24px;
  border-radius: 6px;
  border: none;
  outline: 0;
  background-color: #fff;
  box-shadow: 0 1px 6px 0 #20212447;
`;

export const Text = styled.p`
  font-size: 24px;
`;


export const ButtonSubmit = styled.button`
display: inline-block;
  width: fit-content;
  margin-top: 10px;
  border-radius: 7px;
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  transition: background-color 250ms linear;
  border: 1px solid grey;
  box-shadow: 0 1px 6px 0 #20212447;

  &:hover {
    background-color: #a1c6cf;
    
`;