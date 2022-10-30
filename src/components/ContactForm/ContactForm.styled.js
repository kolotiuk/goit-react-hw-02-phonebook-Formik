import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Forma = styled(Form)`
  border: 2px solid black;
  padding: 15px;
`;

export const FormLabel = styled.label`
  p {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const FormInput = styled(Field)`
  margin: 10px 0;
  width: 50%;
`;

export const ButtonAddContact = styled.button`
  display: block;
  margin-top: 15px;
  padding: 5px 8px;
  background-color: transparent;
  border-radius: 5px;
`;
