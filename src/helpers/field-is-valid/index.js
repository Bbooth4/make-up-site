import { find, equals, reject, append } from 'ramda';

export default (value, field, fields) =>
  dispatch => {
    if (value) {
      dispatch({ type: 'CONTACT_MISSING_FIELDS', data: reject(equals(field))(fields) });
    } else if (!find(equals(field))(fields)) {
      dispatch({ type: 'CONTACT_MISSING_FIELDS', data: append(field)(fields) });
    } else return {};
  };