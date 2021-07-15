import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {nanoid} from 'nanoid'
import {About, Landing, NotFound, Projects, Skills} from './modules/pages'
import {NavBar} from './modules/components'

const Routes = (): JSX.Element => {
  return (
    <Router>
      <NavBar />
      <Switch>
        {ROUTES.map((r) => {
          return (
            <Route
              key={nanoid()}
              exact={r.exact}
              path={r.path}
              component={r.component}
            />
          )
        })}
      </Switch>
    </Router>
  )
}

export const ROUTES = [
  {
    title: 'About',
    path: '/about',
    component: About,
    exact: false,
  },
  {
    title: 'Landing',
    path: '/',
    component: Landing,
    exact: true,
  },
  {
    title: 'Projects',
    path: '/projects',
    component: Projects,
    exact: false,
  },
  {
    title: 'Skills',
    path: '/skills',
    component: Skills,
    exact: false,
  },
  {
    title: 'NotFound',
    path: '/*',
    component: NotFound,
    exact: false,
  },
]

export default Routes
