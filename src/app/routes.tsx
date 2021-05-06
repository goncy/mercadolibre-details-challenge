import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import DetailsScreen from "../product/screens/Details";

import HomeScreen from "./screens/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={HomeScreen} path="/" />
      <Route component={DetailsScreen} path="/:product" />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
