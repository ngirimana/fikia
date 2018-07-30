import React from 'react';
import Header from '../components/Header.jsx';
function Plans() {
    return <div className="container-12">
    <Header />
       <div className="container-fluid" id="cont">
  <div className="text-center">
    <h2>Pricing</h2>
    <h4>Choose a payment plan that works for you</h4>
  </div>
  <div className="row">
    <div className="col-sm-4">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h3>Basic</h3>
        </div>
        <div className="panel-body">
          <p><strong>20</strong> Lorem</p>
          <p><strong>15</strong> Ipsum</p>
          <p><strong>5</strong> Dolor</p>
          <p><strong>2</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>Free</h3>
          <h4>Annual</h4>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </div> 
    </div> 
    <div className="col-sm-4">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h3>Standard</h3>
        </div>
        <div className="panel-body">
          <p><strong>50</strong> Lorem</p>
          <p><strong>25</strong> Ipsum</p>
          <p><strong>10</strong> Dolor</p>
          <p><strong>5</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>50,000 Rwf</h3>
          <h4>per month</h4>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </div> 
    </div> 
   <div className="col-sm-4">
      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h3>Pay as you go</h3>
        </div>
        <div className="panel-body">
          <p><strong>100</strong> Lorem</p>
          <p><strong>50</strong> Ipsum</p>
          <p><strong>25</strong> Dolor</p>
          <p><strong>10</strong> Sit</p>
          <p><strong>Endless</strong> Amet</p>
        </div>
        <div className="panel-footer">
          <h3>20,000 Rwf</h3>
          <h4>per 72 hours</h4>
          <button className="btn btn-lg">Sign Up</button>
        </div>
      </div> 
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

export default Plans;
