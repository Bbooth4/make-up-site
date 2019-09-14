import React from 'react';
import { Home } from './pages';
import { Switch, withRouter } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Home exact path='/' />
    </Switch>
  );
}

export default withRouter(Routes);