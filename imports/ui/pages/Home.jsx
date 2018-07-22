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
                              <div className="ico fa fa-magic highlight"></div>
                              <div className="text-block">
                                <div className="name">Web Design</div>
                                <div className="info">Beauty and function</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 col-md-3">
                            <div className="service-block" >
                              <div className="ico fa fa-code highlight"></div>
                              <div className="text-block">
                                <div className="name">Development</div>
                                <div className="info">Quality code that lasts</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 col-md-3">
                            <div className="service-block" >
                              <div className="ico fa fa-eye highlight"></div>
                              <div className="text-block">
                                <div className="name">Branding/Identity</div>
                                <div className="info">Leave a lasting impression</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 col-md-3 col-md-3">
                            <div className="service-block" >
                              <div className="ico fa fa-umbrella highlight"></div>
                              <div className="text-block">
                                <div className="name">Strategy/Planning</div>
                                <div className="info">Thinking beyond tomorrow</div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames </div>
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
