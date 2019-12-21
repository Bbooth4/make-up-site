import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import photos from './photos';
import contact from './contact';

const rootReducer = history => combineReducers({
  photos,
  contact,
  router: connectRouter(history)
});

export default rootReducer;
