import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import {Client, Config, NotFound} from './modules/pages/Home'

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Client} />
        <Route exact path="/config" component={Config} />
        <Route exact path="/client">
          <Redirect to="/" />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Routes
