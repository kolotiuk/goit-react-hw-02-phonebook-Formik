import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { FormInput } from 'components/ContactForm/ContactForm.styled';

const Filter = ({ handleChange, filter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <Formik>
        <FormInput type="text" value={filter} onChange={handleChange} />
      </Formik>
    </div>
  );
};

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
