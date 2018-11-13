import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { About } from './components';

/**
 * COMPONENT
 */
const Routes = () => {
  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      {/* <Route path="/champions" component={Champions} /> */}
      {/*<Route exact path="/about" component={About} /> */}
      {/* Displays our Home component as a fallback */}
      <Route component={About} />
    </Switch>
  );
};

export default Routes;
