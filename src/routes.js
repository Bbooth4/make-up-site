import React from 'react';
import { Main } from './pages';
import { Switch, withRouter } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Main exact path='/' />
  </Switch>
);

export default withRouter(Routes);