import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import errors from './errors';
import photos from './photos';
import contact from './contact';

const rootReducer = history => combineReducers({
  errors,
  photos,
  contact,
  router: connectRouter(history)
});

export default rootReducer;
