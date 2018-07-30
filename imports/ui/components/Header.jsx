import React from 'react';
import { NavLink } from 'react-router-dom';

// import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return <div>
        
 <nav className="navbar navbar-default navbar-fixed-top">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <div className="logo">
        <a className="navbar-brand" href="#">
          <img src="images/fikia_logo-min.png" />
        </a>
      </div>
    </div> 
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        
          <li><NavLink activeClassName="active" exact to="/">
              Home
            </NavLink></li>
        
        <li><NavLink activeClassName="active" to="/plans">
              Subscription
            </NavLink></li>
        <li> <NavLink activeClassName="active" to="/about">
              About
            </NavLink></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#myModal2" data-toggle="modal"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#myModal" data-toggle="modal"><span className="glyphicon glyphicon-lock" ></span> Login</a></li>
      </ul>
    </div>
</nav>


<div id="myModal" className="modal fade">
  <div className="modal-dialog modal-login">
    <div className="modal-content">
      <div className="modal-header">        
        <h4 className="modal-title">Sign In</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
      </div>
      <div className="modal-body">
     <form action="" method="post" className="login-form">
        <h2 className="text-center">Sign in</h2>    
        <div className="text-center social-btn">
            <a href="#" className="btn btn-primary btn-block"><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
            <a href="#" className="btn btn-info btn-block"><i className="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>
      <a href="#" className="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
        </div>
    <div className="or-seperator"><i>or</i></div>
        <div className="form-group">
          <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
            </div>
        </div>
    <div className="form-group">
            <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>
            </div>
        </div>        
        <div className="form-group">
            <button type="submit" className="btn btn-success btn-block login-btn">Sign in</button>
        </div>
        <div className="clearfix">
            <label className="pull-left checkbox-inline"><input type="checkbox"/> Remember me</label>
            <a href="#" className="pull-right text-success">Forgot Password?</a>
        </div>  
        
    </form>
      </div>
      <div className="modal-footer">Don't have an account? <a href="#myModal2" data-toggle="modal">Create one</a></div>
    </div>
  </div>
</div> 



<div id="myModal2" className="modal fade">
  <div className="modal-dialog modal-login">
    <div className="modal-content">
      <div className="modal-header">        
        <h4 className="modal-title">Create account</h4>
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
      </div>
      <div className="modal-body">
    <form>
    <h2 className="text-center">Sign up to <strong>Fikia</strong></h2>    
        <div className="text-center social-btn">
            <a href="#" className="btn btn-primary btn-block"><i className="fa fa-facebook"></i> Sign in with <b>Facebook</b></a>
            <a href="#" className="btn btn-info btn-block"><i className="fa fa-twitter"></i> Sign in with <b>Twitter</b></a>
      <a href="#" className="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
        </div>
    <div className="or-seperator"><i>or</i></div>
       
<div className="form-group">
                <label htmlFor="name">Names</label>
                <input type="text" className="form-control" id="names" placeholder="Enter names"/>
              </div>
 <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input type="phone" className="form-control" id="phone" placeholder="Enter phone"/>
              </div>

        
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
              </div>
              
                <p className="help-block">By clicking <strong>sign up</strong> you agree to our <a href="#">our terms and conditions of use</a>.</p>
              
              <button type="submit" className="btn btn-success btn-block login-btn">Sign up</button>
            </form>
      </div>
      <div className="modal-footer">Have account? <a href="#myModal" data-toggle="modal">Login here</a></div>
    </div>
  </div>
</div> 
      </div>;
  }
}



{/* <img className='img-responsive2' src='images/fikia_logo-min.png' /> */}