import { v4 as uuid } from 'uuid';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import {
  ButtonAddContact,
  FormLabel,
  Forma,
  FormInput,
} from './ContactForm.styled';

const INITIAL_STATE = { name: '', number: '' };

const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    handleAddContact({ ...values, id: uuid() });
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={INITIAL_STATE} onSubmit={handleSubmit}>
        <Forma>
          <FormLabel>
            <p>Name</p>
            <FormInput
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </FormLabel>
          <FormLabel>
            <p>Number</p>
            <FormInput
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <ButtonAddContact type="submit">Add contact</ButtonAddContact>
        </Forma>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
