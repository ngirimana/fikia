import React from 'react';

function Plans() {
    return <div className="container-12">
        <div className="subPlans container">
          <h3 className="subscribe text-center">Pick a plan that works best for you</h3>
          <hr className="line"></hr>
          <div className="row db-padding-btm db-attached">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="db-wrapper">
                <div className="db-pricing-eleven db-bk-color-one">
                  <div className="price">
                    <p>Free</p>
                    <small>annual</small>
                  </div>
                  <div className="type">BASIC</div>
                  <ul>
                    <li>
                      <i className="glyphicon glyphicon-print" />30+ Accounts{" "}
                    </li>
                    <li>
                      <i className="glyphicon glyphicon-time" />150+ Projects{" "}
                    </li>
                    <li>
                      <i className="glyphicon glyphicon-trash" />Lead Required
                    </li>
                  </ul>
                  <div className="pricing-footer">
                    <a href="#" className="btn db-button-color-square btn-lg">
                      GET
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="db-wrapper">
                <div className="db-pricing-eleven db-bk-color-two popular">
                  <div className="price">
                    <sup>RWF</sup>50,000
                    <small>per month</small>
                  </div>
                  <div className="type">STANDARD</div>
                  <ul>
                    <li>
                      <i className="glyphicon glyphicon-print" />30+ Accounts{" "}
                    </li>
                    <li>
                      <i className="glyphicon glyphicon-time" />150+ Projects{" "}
                    </li>
                    <li>
                      <i className="glyphicon glyphicon-trash" />Lead Required
                    </li>
                  </ul>
                  <div className="pricing-footer">
                    <a href="#" className="btn db-button-color-square btn-lg">
                      GET
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="db-wrapper">
                <div className="db-pricing-eleven db-bk-color-three">
                  <div className="price">
                    <sup>RWF</sup>20,000
                    <small>per 72 hours</small>
                  </div>
                  <div className="type">USAGE BASED</div>
                  <ul>
                    <li>
                      <i className="glyphicon glyphicon-print" />30+ Accounts{" "}
                    </li>
                    <li>
                      <i className="glyphicon glyphicon-time" />150+ Projects{" "}
                    </li>
                    <li>
                      <i className="glyphicon glyphicon-trash" />Lead Required
                    </li>
                  </ul>
                  <div className="pricing-footer">
                    <a href="#" className="btn db-button-color-square btn-lg">
                      GET
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
        <section id="footer">
          <div className="container">
            <div className="row text-center text-xs-center text-sm-left text-md-left">
              <div className="col-xs-12 col-sm-4 col-md-6">
                <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Videos</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-6">
                <h5>Quick links</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Home</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>About</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>FAQ</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Get Started</a></li>
                  <li><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i className="fa fa-angle-double-right"></i>Imprint</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
                  <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
                </ul>
              </div>
              <hr></hr>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p className="h6">&copy; All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Fikia Ltd</a></p>
              </div>
              <hr></hr>
            </div>
          </div>
        </section>         
      </div>;
}

export default Plans;
