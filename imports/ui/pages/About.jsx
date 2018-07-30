import React from 'react';
import Header from '../components/Header.jsx';
function About() {
  return <div className="About">
<Header />


<div className="container-fluid text-center">
 
      <h2>Our Values</h2>
      <h4><strong>MISSION:</strong><br/> We aim to help you get a deeper insight
into the market, identify opportunities 
and make the best decision using DATA.</h4>      
      <h4><strong>VISION:</strong><br/> We believe in the power of data.
The goal is to turn data into information, and information into insight.
</h4>
  
</div>


<div className="container-fluid text-center">
  <h2>SERVICES</h2>
  <h4>What we offer</h4>
  <br/>
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-off logo-small"></span>
      <h4>POWER</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-heart logo-small"></span>
      <h4>LOVE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock logo-small"></span>
      <h4>JOB DONE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
  <br/><br/>
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf logo-small"></span>
      <h4>GREEN</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"></span>
      <h4>CERTIFIED</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"></span>
      <h4>HARD WORK</h4>
      <p>Lorem ipsum dolor sit amet..</p>
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
            <p>© 2018 Fikia Limited </p>
        </div>
    </footer>
    </div>;
}

export default About;
