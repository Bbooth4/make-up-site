import axios from 'axios';

export const updateForm = (key, e) =>
  dispatch => e && dispatch({ type: 'CONTACT', data: { [key]: e.target.value } });

export const submitForm = data =>
  dispatch => {
    axios.post(`http://localhost:9001/contact`, data)
    .then(res => {
      res.data
        ? dispatch({ type: 'SAVE_CONTACT', data: res.data })
        : dispatch({ type: 'CONTACT_ERROR', data: 'CONTACT_ERROR' });
    })
    .catch(err => dispatch({ type: 'CONTACT_ERROR', data: err }));
  };

