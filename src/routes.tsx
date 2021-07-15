import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {nanoid} from 'nanoid'
import {About, Landing, NotFound, Projects, Skills} from './modules/pages'

const Routes = (): JSX.Element => {
  return (
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
  )
}

export const ROUTES = [
  {
    title: 'About',
    path: '/about',
    component: About,
    exact: true,
  },

  {
    title: 'Skills',
    path: '/skills',
    component: Skills,
    exact: true,
  },
  {
    title: 'Projects',
    path: '/projects',
    component: Projects,
    exact: true,
  },
  {
    title: 'Landing',
    path: '/',
    component: Landing,
    exact: true,
  },
  {
    title: 'NotFound',
    path: '/*',
    component: NotFound,
    exact: false,
  },
]

export default Routes
