import React from 'react'
import { Route, Switch } from 'react-router'
import { ProjectL } from '../Pages/ProjectL'
import { TimeTrackerL } from '../Pages/TimeTrackerL'
import { LoginNavbar22 } from './LoginNavbar'
import {ClientL} from "../Pages/ClientL"

export const RoutesLogin = () => {
    return (
        <div>
            <LoginNavbar22/>
            <Switch>
                <Route path = "/timetracker" component = {TimeTrackerL} >
                    <TimeTrackerL/>
                </Route>
                <Route path = "/projects" component = {ProjectL}>
                    <ProjectL/>
                </Route>
                <Route path = "/clients" component = {ClientL}>
                    <ClientL/>
                </Route>
                <Route>
                    <h1>Error page not found</h1>
                </Route>
            </Switch> 
        </div>
    )
}
