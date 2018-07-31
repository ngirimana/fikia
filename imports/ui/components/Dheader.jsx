import React from 'react';
import { NavLink } from 'react-router-dom';
import { Meteor } from 'meteor/meteor'
import { Session } from 'meteor/session'

 let email=Session.get('email');
 console.log(email);

export default class Dheader extends React.Component {

  render() {
    return <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="logo">
              <a className="navbar-brand" href="#">
                <img src="images/fikia_logo-min.png" />
              </a>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li>
                <NavLink activeClassName="active" to="/dashboard">
                  Data patal
                </NavLink>
              </li>

              <li>
                <NavLink activeClassName="active" to="/dashboard">
                  Subscription
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink activeClassName="active" to="/dashboard">
                  Help
                </NavLink>
              </li>
            </ul>
            <form className="navbar-form navbar-left" action="">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-btn">
                  <button className="btn btn-default" type="submit">
                    <i className="glyphicon glyphicon-search" />
                  </button>
                </div>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <button style={{ margin: 10 }} type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-target=".bs-example-modal-sm">
                <span className="glyphicon glyphicon-log-out" /> Log out
              </button>
            </ul>
          </div>
        </nav>

        <div className="modal bs-example-modal-sm" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h4>
                  Logout <i className="fa fa-lock" />
                </h4>
              </div>
              <div className="modal-body">
                <i className="fa fa-question-circle" /> Are you sure you want to log-off?
              </div>
              <div className="modal-footer">
                <a href="" className="btn btn-primary btn-block" activeClassName="active" to="/">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}



{/* <img className='img-responsive2' src='images/fikia_logo-min.png' /> */}