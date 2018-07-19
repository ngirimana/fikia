import React from 'react';
import { NavLink } from 'react-router-dom';

// import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return <header className="Header navbar navbar-default navbar-fixed-top navbar-bar brand-name clearfix">
        <div className="logo">
          <img className="img-responsive" src="images/fikia_logo-min.png"/><b id="logo">Fikia</b> &nbsp;
        </div>

        <div className="text-right">
          <NavLink activeClassName="active" className="align-top" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
          <NavLink activeClassName="active" to="/plans">
            Subscription
          </NavLink>
          <NavLink activeClassName="active" to="/dashboard">
            Dashboard
          </NavLink>
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
          {/* <LoginButtons align='right' /> */}
        </div>
      </header>;
  }
}

{/* <img className='img-responsive2' src='images/fikia_logo-min.png' /> */}