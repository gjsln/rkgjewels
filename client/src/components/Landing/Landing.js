import React from "react";
import { Switch, Route } from "react-router-dom";
import GetOffer from '../Pages/GetOffer';

const Landing = () => (
  <Landing>
    <Switch>
      <Route exact path="/get-your-offer" component={GetOffer} />
    </Switch>
  </Landing>
);

export default Landing;