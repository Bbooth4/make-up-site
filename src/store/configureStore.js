import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const history = createBrowserHistory();

const configureStore = initialState => {
  const middleware = [];

  middleware.push(thunk);
  middleware.push(routerMiddleware(history))

  const logger = createLogger({
    level: 'info',
    collapsed: true
  });

  if (process.env.REACT_APP_ENV === 'development') middleware.push(logger);
  else if (process.env.REACT_APP_ENV === 'staging') middleware.push(logger);

  return createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(...middleware))
  )
}

const reduxStore = { configureStore, history };

export default reduxStore;
