import axios from 'axios';
import { missingFields, fieldIsValid } from '../../helpers';

export const updateForm = (key, e, missingFields) =>
  dispatch => {
    if (e) {
      dispatch({ type: 'CONTACT', data: { [key]: e.target.value } });
      dispatch(fieldIsValid(e.target.value, key, missingFields));
    }
  };

const requiredFields = ['topic', 'email', 'content', 'lastName', 'firstName'];

export const submitForm = data =>
  dispatch => {
    const fields = missingFields(data, requiredFields);

    fields.length === 0
      ? axios.post(`http://localhost:9001/contact`, data)
        .then(res => res.data
          ? dispatch({ type: 'SAVE_CONTACT', data: {} })
          : dispatch({ type: 'CONTACT_ERROR', data: 'CONTACT_ERROR' })
        )
        .catch(err => dispatch({ type: 'CONTACT_ERROR', data: err }))
      :  dispatch({ type: 'CONTACT_MISSING_FIELDS', data: fields });
  };
