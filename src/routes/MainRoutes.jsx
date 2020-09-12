import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Dinner from "../pages/Dinner";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dinner" component={Dinner} />
      </Switch>
    </BrowserRouter>
  );
};

export default MainRoutes;
