import React from "react";
import { Route, Switch } from "react-router-dom";
import { Clockify } from "./Clockify";
import {FeaturesPage} from "./FeaturesPage"

import {DownloadsPage} from "./DownloadsPage"
import { Login } from "./Login";
import { Navbarhome } from "./Navbathome";

import { Signup } from "./Signup";
import { TimeTracker } from "../../Rajat/Components/ClockifyTimeTracker/TimeTracker";
import { LoginNavbar22 } from "../../LoginNavbar/Navbar2/LoginNavbar";
import { Project } from "../../Rajat/Components/ClockifyProject/Project";
import { Client } from "../../Rajat/Components/ClockifyClient/Client";
import { Calender } from "../../LoginNavbar/Pages/CalenderL";

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
        <Route path = "/timetracker/:id/:username">
          <LoginNavbar22/>
          <TimeTracker/>
        </Route>
        <Route path = "/projects/:id/:username">
          <LoginNavbar22/>
          <Project/>
        </Route>
        <Route path = "/clients/:id/:username">
          <LoginNavbar22/>
          <Client/>
        </Route>
        <Route path = "/calender/:id/:username">
          <LoginNavbar22/>
          <Calender/>
        </Route>
        <Route>
          <h3>ERROR 4040 NOT FOUND</h3>
        </Route>
      </Switch>
    </div>
  );
}

export { Routes };
