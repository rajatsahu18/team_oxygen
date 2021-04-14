import React from "react"
import { Route, Switch } from "react-router"

import { Clockify } from "../Navbar/Clockify"
import { Downloads } from "../Navbar/Downloads"
import { Features } from "../Navbar/Features"
import { Login } from "../Navbar/Login"
import { Signup } from "../Navbar/Signup"
import { AboutUs } from "./AboutUs"
import { Api } from "./Api"
import { Blog } from "./Blog"
import { Contact } from "./Contact"
import { Customers } from "./Customers"
import { Extras } from "./Extras"
import { Help } from "./Help"
import { Intergrations } from "./Integrations"
import { NavbarF } from "./NavbarF"
import { Resources } from "./Resources"
import { SelfHoisting } from "./SelfHoisting"
import { TimeCalculator } from "./TimeCalculator"
import { TimeClock } from "./TimeClock"
import { TimeSheet } from "./TimeSheet"
import { Tutorials } from "./Tutorials"





function RoutesF() {
    return (
        <div>

            <div>
                <NavbarF />

                <Switch>
                    <Route exact path="/">
                        <Clockify />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <Signup />
                    </Route>



                    
                    <Route exact path="/features">
                        <Features />
                    </Route>
                    <Route exact path="/downloads">
                        <Downloads/>
                    </Route>
                    <Route exact path="/intergrations">
                        <Intergrations />
                    </Route>
                    <Route exact path="/extras">
                        <Extras />
                    </Route>




                    <Route exact path="/timeclock">
                        <TimeClock/>
                    </Route>
                    <Route exact path="/timesheet">
                        <TimeSheet/>
                    </Route>
                    <Route exact path="/timecalculator">
                        <TimeCalculator/>
                    </Route>
                    <Route exact path="/selfhoisting">
                        <SelfHoisting/>
                    </Route>



                    <Route exact path="/aboutus">
                        <AboutUs />
                    </Route>
                    <Route exact path="/customers">
                        <Customers />
                    </Route>
                    <Route exact path="/resources">
                        <Resources />
                    </Route>
                    <Route exact path="/blog">
                        <Blog />
                    </Route>



                    <Route exact path="/help">
                        <Help />
                    </Route>
                    <Route exact path="/tutorials">
                        <Tutorials />
                    </Route>
                    <Route exact path="/api">
                        <Api />
                    </Route>
                    <Route exact path="/contact">
                        <Contact/>
                    </Route>


                    <Route>
                        <h3>ERROR 4040 NOT FOUND</h3>
                    </Route>
                </Switch>
                
            </div>
          


        </div>

    )
}


export { RoutesF }