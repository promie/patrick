import React from 'react'
import HomeDark from '../views/HomeDark'
import NotFound from '../views/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ScrollTopBehaviour from '../components/ScrollTopBehaviour'

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={HomeDark} />
          <Route exact path="/patrick" component={HomeDark} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  )
}

export default Routes
