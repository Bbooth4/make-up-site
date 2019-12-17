import React from 'react';
import { connect, Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './theme';
import Routes from './routes'

const Root = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </ConnectedRouter>
  </Provider>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Root);
