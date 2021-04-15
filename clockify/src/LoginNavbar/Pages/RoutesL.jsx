import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginNavbar22 } from "../Navbar2/LoginNavbar";



function RoutesNavbar() {
  return (
    <div>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginNavbar22 />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export { RoutesNavbar };
