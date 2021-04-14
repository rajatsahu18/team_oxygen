import React from "react";
import { Route, Switch } from "react-router-dom";
import { Clockify } from "./Clockify";
import { Downloads } from "./Downloads";
import { Features } from "./Features";
import { Login } from "./Login";
import { Navbarhome } from "./Navbathome";

import { Signup } from "./Signup";

function Routes() {
  return (
    <div>
      <Navbarhome />
      <Switch>
        <Route exact path="/">
          <Clockify />
        </Route>
        <Route exact path="/features">
          <Features />
        </Route>
        <Route exact path="/downloads">
          <Downloads />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route>
          <h3>ERROR 4040 NOT FOUND</h3>
        </Route>
      </Switch>
    </div>
  );
}

export { Routes };
