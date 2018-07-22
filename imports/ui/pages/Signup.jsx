import React from 'react';
// import classNames from 'classnames';

function signUp() {
  return <div className="container-12 stylish-form">
      <div className="row mar20">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="inner-section">
            <form method="POST" action="#">
              <div className="mar20 inside-form">
                <h2 className="font_white text-center">Sign Up</h2>
                <p className="font_white text-center">with</p>
                <ul>
                  <li className="icon-holder dsp-flex">
                    <i className="fa fa-google " />
                  </li>
                  <li className="icon-holder dsp-flex">
                    <i className="fa fa-twitter " />
                  </li>
                  <li className="icon-holder dsp-flex">
                    <i className="fa fa-facebook " />
                  </li>
                </ul>
                <p className="font_white text-center">OR</p>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-pencil " />
                  </span>
                  <input type="text" className="form-control" name="text" placeholder="First Name..." />
                </div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-pencil " />
                  </span>
                  <input type="text" className="form-control" name="text" placeholder="Last Name..." />
                </div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-envelope " />
                  </span>
                  <input type="email" className="form-control" name="text" placeholder="Email..." />
                </div>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-lock " />
                  </span>
                  <input type="password" className="form-control" name="text" placeholder="Password..." />
                </div>
                <div className="footer text-center">
                  <a href="#" className="btn btn-neutral btn-round btn-lg">
                    Get Started
                  </a>
                </div>
              </div>
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

export default signUp;
