import React, { Component } from 'react'
import { RouteConfig } from "router"
import routeEach from "utils/routeEach";
import { HashRouter as Route, Switch, Redirect } from "react-router-dom"
export default class App extends Component {
  render() {
    return (
      <Route>
        <Switch>
          <Redirect from="/" to="/home" exact />
          {routeEach(RouteConfig)}
        </Switch>

      </Route>
    )
  }
}
