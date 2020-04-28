import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ChooseToppings, ChooseSize, CheckCustomPizza } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/make-your-pizza" exact component={ChooseSize} />
    <Route path="/make-your-pizza/toppings" exact component={ChooseToppings} />
    <Route
      path="/make-your-pizza/check-custom-pizza"
      exact
      component={CheckCustomPizza}
    />
  </Switch>
);

export default Routes;
