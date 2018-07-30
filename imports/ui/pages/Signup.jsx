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
      <footer id="myFooter">
        <div className="container">
            <div className="row">
                <div className="col-sm-3">
                    <h2 className="logo"><a href="#">  </a></h2>
                </div>
                <div className="col-sm-2">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div className="col-sm-2">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div className="col-sm-3">
                    <div className="social-networks">
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
                    </div>
                    <button type="button" className="btn btn-default">Contact us</button>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2018 Copyright Text </p>
        </div>
    </footer>
    </div>;
}

export default signUp;
