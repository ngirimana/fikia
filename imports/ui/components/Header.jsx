import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header navbar navbar-default navbar-fixed-top'>
        <div><b id='logo'>Fikia</b> &nbsp;</div>
        
        <div className='Menu text-right'>
          <NavLink activeClassName="active" exact to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/about">About</NavLink>
          <NavLink activeClassName="active" to="/plans">Subscription</NavLink>
          <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
          <LoginButtons align='right' />
        </div>
      </header>
    );
  }
}
