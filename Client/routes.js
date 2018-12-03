import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Contact, Projects } from './components';

/**
 * COMPONENT
 */
const Routes = () => {
  return (
    <Switch>
      {/* Routes placed here are available to all visitors */}
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      {/* Displays my About component as a fallback */}
      <Route component={About} />
    </Switch>
  );
};

export default Routes;
