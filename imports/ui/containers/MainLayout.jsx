import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Dashboard from '../components/Dashboard';
import Plans from '../pages/Plans.jsx'
import Checkout from '../pages/Checkout.jsx';
import Sidenav from '../components/Sidenav.jsx';
import NotFound from '../pages/NotFound.jsx';


export default class MainLayout extends React.Component {
  render() {
    return (
      <Router>
        <div>
        
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path = '/about' component={About} />
              <Route exact={true} path = '/dashboard' component={Dashboard} />
              <Route path='/plans' component={Plans} />
              <Route path='/checkout' component={Checkout} />
            <Route path='/Sidenav' component={Sidenav} />
              <Route component={NotFound} />
            </Switch>
        </div>
      </Router>
    );
  }
}
