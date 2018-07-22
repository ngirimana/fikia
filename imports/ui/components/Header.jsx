import React from 'react';
import { NavLink } from 'react-router-dom';

// import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return <div className="clearfix">
        <header className="Header navbar navbar-default navbar-fixed-top navbar-bar brand-name">
          <div className="logo float-left">
            <img className="img-responsive" src="images/fikia_logo-min.png" />
            <b id="logo">Fikia</b> &nbsp;
          </div>

          <div className="links text-right float-right">
            <NavLink activeClassName="active" exact to="/">
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
        </header>
      </div>;
  }
}

{/* <img className='img-responsive2' src='images/fikia_logo-min.png' /> */}