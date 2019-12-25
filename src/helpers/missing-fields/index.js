import { isNil, filter } from 'ramda';

export default (data, fields) => filter(contact => isNil(data[contact]))(fields);
