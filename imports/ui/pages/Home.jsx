import React from 'react';
import classNames from 'classnames';


function Home() {
  return <div className="container-12">
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
          </div>
              
    </div>;
  }

export default Home;
