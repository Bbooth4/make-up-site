import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import stores from './stores';


const rootReducer = history => combineReducers({
  stores,
  router: connectRouter(history)
});

export default rootReducer;
