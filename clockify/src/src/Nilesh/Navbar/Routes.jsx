import React from "react";
import { Route, Switch } from "react-router-dom";
import { Clockify } from "./Clockify";
import {FeaturesPage} from "./FeaturesPage"

import {DownloadsPage} from "./DownloadsPage"
import { Login } from "./Login";
import { Navbarhome } from "./Navbathome";

import { Signup } from "./Signup";

function Routes() {
  return (
    <div>
  
      <Switch>
        <Route exact path="/">
        <Navbarhome />
          <Clockify />
        </Route>
        <Route exact path="/features">
        <Navbarhome />
          <FeaturesPage />
        </Route>
        <Route exact path="/downloads">
        <Navbarhome />
          <DownloadsPage />
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
