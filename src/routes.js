import React from 'react';
import { Main } from './pages';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Main} />
  </Switch>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Routes);
