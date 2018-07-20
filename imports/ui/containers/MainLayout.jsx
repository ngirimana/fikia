import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '../components/Header.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Login from '../components/Login';
import Dashboard from '../pages/Dashboard.jsx';
import Plans from '../pages/Plans.jsx'
import signUp from '../pages/Signup.jsx';
import NotFound from '../pages/NotFound.jsx';

export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path = '/about' component={About} />
              <Route path = '/dashboard' component={Dashboard} />
              <Route path='/plans' component={Plans} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={signUp} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}
