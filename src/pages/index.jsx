import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { routes } from '../navigation'
import './index.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Redirect from='/' to='/contractList' exact />
        {routes.map(({ key, path, exact, component }) => (
          <Route key={key} path={path} exact={exact} component={component} />
        ))}
      </Switch>
    </Router>
  )
}

export default App
