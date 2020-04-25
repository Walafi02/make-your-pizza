import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ChooseCrust, ChooseSize } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={ChooseSize} />
    <Route path="/crust" component={ChooseCrust} />
  </Switch>
);

export default Routes;
