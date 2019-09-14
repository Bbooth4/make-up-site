import React from 'react';
import Home from './home';
import { Switch, withRouter } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Home exact path='/' />
    </Switch>
  );
}

export default withRouter(Routes);