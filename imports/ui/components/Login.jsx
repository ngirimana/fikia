import React from 'react';

function Login() {
    return <div className="container-12">
        <div className="container">
          <div className="row">
            <div className="main">
              <h3>
                Please Log In, or <a href="#">Sign Up</a>
              </h3>
              <a href="#" className="btn btn-lg btn-danger btn-block btn-labeled">
                <span className="btn-label">
                  <i className="fa fa-google-plus" />
                </span>Google
              </a>
              <div className="login-or">
                <hr className="hr-or" />
                <span className="span-or">or</span>
              </div>

              <form role="form" className="login" name="login">
                <div className="form-group">
                  <label for="inputUsernameEmail">Username or email</label>
                  <input type="email" name="email" className="form-control" id="inputUsernameEmail" required />
                </div>
                <div className="form-group">
                  <a className="pull-right" href="#">
                    Forgot password?
                  </a>
                  <label for="inputPassword">Password</label>
                  <input type="password" name="password" className="form-control" id="inputPassword" required />
                </div>
                <div className="checkbox pull-right">
                  <label>
                    <input type="checkbox" />Remember me{" "}
                  </label>
                </div>
                <button type="submit" value="Login" className="btn btn btn-primary">
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
        <section id="footer">
          <div className="container">
            <div className="row text-center text-xs-center text-sm-left text-md-left">
              <div className="col-xs-12 col-sm-4 col-md-6">
                <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    <a href="javascript:void();">
                      <i className="fa fa-angle-double-right" />Home
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();">
                      <i className="fa fa-angle-double-right" />About
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();">
                      <i className="fa fa-angle-double-right" />FAQ
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();">
                      <i className="fa fa-angle-double-right" />Get Started
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();">
                      <i className="fa fa-angle-double-right" />Videos
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-6">
                <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    <a href="javascript:void();">
                      <i className="fa fa-angle-double-right" />Home
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();">
                      <i className="fa fa-angle-double-right" />About
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();">
                      <i className="fa fa-angle-double-right" />FAQ
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void();">
                      <i className="fa fa-angle-double-right" />Get Started
                    </a>
                  </li>
                  <li>
                    <a href="https://wwwe.sunlimetech.com" title="Design and developed by">
                      <i className="fa fa-angle-double-right" />Imprint
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item">
                    <a href="javascript:void();">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void();">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void();">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void();">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="javascript:void();" target="_blank">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
              <hr className="linebreak" />
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p className="h6">
                  &copy; All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">
                    Fikia Ltd
                  </a>
                </p>
              </div>
              <hr className="linebreak" />
            </div>
          </div>
        </section>
      </div>;
}

export default Login;
