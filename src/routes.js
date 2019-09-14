import React from 'react';
import { Main } from './pages';
import { Switch, withRouter } from 'react-router-dom';

function Routes() {
  return (
    <Switch>
      <Main exact path='/' />
    </Switch>
  );
}

export default withRouter(Routes);