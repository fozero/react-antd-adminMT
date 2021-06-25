import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavMenu from '../components/Layout/NavMenu'
import { routes } from '../navigation'
import './index.css'

const App = () => {
  return (
    <Router>
      <NavMenu />
      <Switch>
        {routes.map(({ key, path, exact, component }) => (
          <Route key={key} path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </Router>
  )
}

export default App
