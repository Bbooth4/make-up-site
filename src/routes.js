import React from 'react';
import { connect } from 'react-redux';
import { Main, Contact } from './pages';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Main} />
    <Route exact path='/contact' component={Contact} />
  </Switch>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Routes);
