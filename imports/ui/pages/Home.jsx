import React from 'react';
import classNames from 'classnames';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

function Home() {
  return <div className="mainBody container-12">
          <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
            <div className="overlay" />

            <ol className="carousel-indicators">
              <li data-target="#bs-carousel" data-slide-to="0" class="active" />
              <li data-target="#bs-carousel" data-slide-to="1" />
              <li data-target="#bs-carousel" data-slide-to="2" />
            </ol>

            <div className="carousel-inner">
              <div className="item slides active">
                <div className="slide-1" />
                <div className="hero">
                  <hgroup>
                    <h1>Fikia</h1>
                    <h3>
                      Make the best decisions for your business through the power
                      of data
                    </h3>
                  </hgroup>
                  <button className="btn btn-hero btn-lg" role="button">
                    See all features
                  </button>
                </div>
              </div>
              <div className="item slides">
                <div className="slide-2" />
                <div className="hero">
                  <hgroup>
                    <h1>Competitive Advantage</h1>
                    <h3>We believe in the power of data to help you transform your business</h3>
                  </hgroup>
                  <button className="btn btn-hero btn-lg" role="button">
                    See all features
                  </button>
                </div>
              </div>
              <div className="item slides">
                <div className="slide-3" />
                <div className="hero">
                  <hgroup>
                    <h1>Market Insight</h1>
                    <h3>Get accurate information about the market and exploit opportunity</h3>
                  </hgroup>
                  <button class="btn btn-hero btn-lg" role="button">
                    See all features
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className={classNames("Home", "foo", "bar")}>
      


            
            <div>{/* this is where our partners go */}</div>

            <h4>What we do</h4>

            <ul>
              {/* <i>icon */}
              <li>Are you an</li>
              <ul>
                <li>entrepreneur?</li>
                <li>researcher?</li>
                <li> investor?</li>
              </ul>
              {/* <i>icon */}
              <li>
                Looking to create an impactfull product/service that serves your
                community?
              </li>
              {/* <i>icon */}
              <li>User Fikia to:</li>
              <ul>
                <li>gain access to reliable,relevant data</li>
                <li>forecast revenue</li>
                <li>get deeper insight into consumer behaviour</li>
              </ul>
              {/* <i>icon */}
              <li>Make informed decision on:</li>
              <ul>
                <li>how to grow your business</li>
                <li>where to invest</li>
                <li>how/when to expand to other markets</li>
              </ul>
            </ul>
            <h4>What we do</h4>

            <ul>
              {/* <i>icon */}
              <li>Are you an</li>
              <ul>
                <li>entrepreneur?</li>
                <li>researcher?</li>
                <li> investor?</li>
              </ul>
              {/* <i>icon */}
              <li>
                Looking to create an impactfull product/service that serves your
                community?
                    </li>
              {/* <i>icon */}
              <li>User Fikia to:</li>
              <ul>
                <li>gain access to reliable,relevant data</li>
                <li>forecast revenue</li>
                <li>get deeper insight into consumer behaviour</li>
              </ul>
              {/* <i>icon */}
              <li>Make informed decision on:</li>
              <ul>
                <li>how to grow your business</li>
                <li>where to invest</li>
                <li>how/when to expand to other markets</li>
              </ul>
            </ul>
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

export default Home;
