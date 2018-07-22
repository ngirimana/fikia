import React from 'react';

function About() {
  return <div className="About">
      <div className="aboutBody container">
        <h1 className='text-center'>Our Mission</h1>

        <p className='text-center'>We aim to help you get a deeper insight<br></br>into the market, identify opportunities <br></br>and make the best decision using <b>DATA</b>.</p>
        <hr></hr>
        <h2 className='text-center'>We believe in the power of data.</h2>
        <blockquote className="text-center">The goal is to turn data into information, and information into insight.</blockquote>
        <h4 className="text-center">Carly Fiorina</h4>
        <p className="text-center">Former CEO of Helwett-Packard</p>
        <hr></hr>
        <div id="testimonial4" className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval="5000" data-duration="2000">
          <div className="testimonial4_header">
            <h4>What our clients are saying</h4>
          </div>
          <ol className="carousel-indicators">
            <li data-target="#testimonial4" data-slide-to="0" className="active"></li>
            <li data-target="#testimonial4" data-slide-to="1"></li>
            <li data-target="#testimonial4" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="testimonial4_slide">
                <img src="http://via.placeholder.com/100x100" className="img-circle img-responsive" />
                <p>Lorem ipsum dolor sit amet adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur.</p>
                <h4>Ben Hanna</h4>
              </div>
            </div>
            <div className="item">
              <div className="testimonial4_slide">
                <img src="http://via.placeholder.com/100x100" className="img-circle img-responsive" />
                <p>Lorem ipsum dolor sit amet adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur.</p>
                <h4>Ben Hanna</h4>
              </div>
            </div>
            <div className="item">
              <div className="testimonial4_slide">
                <img src="http://via.placeholder.com/100x100" className="img-circle img-responsive" />
                <p>Lorem ipsum dolor sit amet adipiscing elit am nibh unc varius facilisis eros ed erat in in velit quis arcu ornare laoreet urabitur.</p>
                <h4>Ben Hanna</h4>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#testimonial4" role="button" data-slide="prev">
            <span className="fa fa-chevron-left"></span>
          </a>
          <a className="right carousel-control" href="#testimonial4" role="button" data-slide="next">
            <span className="fa fa-chevron-right"></span>
          </a>
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
              <hr className="linebreak"></hr>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p className="h6">&copy; All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Fikia Ltd</a></p>
              </div>
              <hr className="linebreak"></hr>
            </div>
          </div>
        </section>         
    </div>;
}

export default About;
