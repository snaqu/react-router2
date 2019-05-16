import React from 'react';
import styled from 'styled-components';
import { Prompt } from 'react-router-dom';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  padding: 50px 0;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
`;
const Input = styled.input`
  width: 50%;
  margin: 30px 0;
`;

const ContactPage = () => {
  return (
    <Form>
      <TextArea rows="15" />
      <Input type="submit" value="submit" />
      <Prompt when message="test" />
    </Form>
  );
};

export default ContactPage;
