import React from 'react';
// import classNames from 'classnames';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import Header from '../components/Header.jsx';

function Home() {
  return <div>
  <Header />
          <div className="home">
          <div className="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
            <div className="overlay" />

            <ol className="carousel-indicators">
              <li data-target="#bs-carousel" data-slide-to="0" className="active" />
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
                  <button className="btn btn-hero btn-lg" role="button">
                    See all features
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container-12 bootstrap snippet">
            <section id="services" className="current">
              <div className="services-top">
                <div className="container-12 bootstrap snippet">
                  <div className="row text-center">
                    <div className="col-sm-12 col-md-12 col-md-12">
                      <h2>What We Do</h2>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-offset-1 col-sm-12 col-md-12 col-md-10">
                      <div className="services-list">
                        <div className="row">
                          <div className="col-sm-6 col-md-3 col-md-3">
                            <div className="service-block" >
                              <div className="ico fa fa-briefcase highlight"></div>
                              <div className="text-block">
                                <h2>Are you a/an:</h2>
                                <ul>
                                <li><h5>Entrepreneur?</h5></li>
                                <li><h5>researcher</h5></li>
                                <li><h5>Investor?</h5></li>
                                </ul>
                                 </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 col-md-3">
                            <div className="service-block" >
                              <div className="ico   fa fa-lightbulb-o highlight"></div>
                              <div className="text-block">
                                <h2>Your aim:</h2>
                                <ul>
                                <li><h5>Looking to create an impactfull product/service that serves your community?</h5></li>
                                
                                </ul>

                                   </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 col-md-3">
                            <div className="service-block" >
                              <div className="ico fa fa-bar-chart highlight"></div>
                              <div className="text-block">
                                <h2>Use FIKIA to:</h2>
                                <ul>
                                <li><h5>Gain access to reliable ,relevant data</h5></li>
                                <li><h5>Forecast revenues</h5></li>
                                <li><h5>Get deeper insights into consumer behaviours.</h5></li>
                                </ul>      </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 col-md-3">
                            <div className="service-block" >
                              <div className="ico fa fa-check highlight"></div>
                              <div className="text-block">
                                <h2>Make informed decisions on:</h2>
                               <ul>
                                <li><h5>How to glow your business</h5></li>
                                <li><h5>Where to invest</h5></li>
                                <li><h5>How/when to expand to other markets.</h5></li>
                                </ul>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
                        <a href="#me" className="twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="google"><i className="fa fa-google-plus"></i></a>
                    </div>
                    <button type="button" className="btn btn-default">Contact us</button>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <p>© 2018 Fikia Limited </p>
        </div>
    </footer>
    </div>
    </div>;
  }

export default Home;
