import React from 'react';

function Login() {
    return <div className="container-12">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a className="navbar-brand" href="#">Start Bootstrap</a>
    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <a className="nav-link" href="#">
            <i className="fa fa-fw fa-dashboard"></i>
            <span className="nav-link-text">Dashboard</span>
          </a>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
          <a className="nav-link" href="#">
            <i className="fa fa-fw fa-area-chart"></i>
            <span className="nav-link-text">Charts</span>
          </a>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
          <a className="nav-link" href="#">
            <i className="fa fa-fw fa-table"></i>
            <span className="nav-link-text">Tables</span>
          </a>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
          <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
            <i className="fa fa-fw fa-wrench"></i>
            <span className="nav-link-text">Components</span>
          </a>
          <ul className="sidenav-second-level collapse" id="collapseComponents">
            <li>
              <a href="#">Navbar</a>
            </li>
            <li>
              <a href="#">Cards</a>
            </li>
          </ul>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
          <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion">
            <i className="fa fa-fw fa-file"></i>
            <span className="nav-link-text">Example Pages</span>
          </a>
          <ul className="sidenav-second-level collapse" id="collapseExamplePages">
            <li>
              <a href="#">Login Page</a>
            </li>
            <li>
              <a href="#">Registration Page</a>
            </li>
            <li>
              <a href="#">Forgot Password Page</a>
            </li>
            <li>
              <a href="#">Blank Page</a>
            </li>
          </ul>
        </li>
        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
          <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
            <i className="fa fa-fw fa-sitemap"></i>
            <span className="nav-link-text">Menu Levels</span>
          </a>
          <ul className="sidenav-second-level collapse" id="collapseMulti">
            <li>
              <a href="#">Second Level Item</a>
            </li>
            <li>
              <a href="#">Second Level Item</a>
            </li>
            <li>
              <a href="#">Second Level Item</a>
            </li>
            <li>
              <a className="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2">Third Level</a>
              <ul className="sidenav-third-level collapse" id="collapseMulti2">
                <li>
                  <a href="#">Third Level Item</a>
                </li>
                <li>
                  <a href="#">Third Level Item</a>
                </li>
                <li>
                  <a href="#">Third Level </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <a className="nav-link" href="#">
            <i className="fa fa-fw fa-link"></i>
            <span className="nav-link-text">Link</span>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav sidenav-toggler">
        <li className="nav-item">
          <a className="nav-link text-center" id="sidenavToggler">
            <i className="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-fw fa-envelope"></i>
            <span className="d-lg-none">Messages
              <span className="badge badge-pill badge-primary">12 New</span>
            </span>
            <span className="indicator text-primary d-none d-lg-block">
              <i className="fa fa-fw fa-circle"></i>
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby="messagesDropdown">
            <h6 className="dropdown-header">New Messages:</h6>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <strong>David Miller</strong>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <strong>Jane Smith</strong>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <strong>John Doe</strong>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item small" href="#">View all messages</a>
          </div>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-fw fa-bell"></i>
            <span className="d-lg-none">Alerts
              <span className="badge badge-pill badge-warning">6 New</span>
            </span>
            <span className="indicator text-warning d-none d-lg-block">
              <i className="fa fa-fw fa-circle"></i>
            </span>
          </a>
          <div className="dropdown-menu" aria-labelledby="alertsDropdown">
            <h6 className="dropdown-header">New Alerts:</h6>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <span className="text-danger">
                <strong>
                  <i className="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              <span className="text-success">
                <strong>
                  <i className="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span className="small float-right text-muted">11:21 AM</span>
              <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item small" href="#">View all alerts</a>
          </div>
        </li>
        <li className="nav-item">
          <form className="form-inline my-2 my-lg-0 mr-lg-2">
            <div className="input-group">
              <input className="form-control" type="text" placeholder="Search for..."/>
              <span className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i className="fa fa-fw fa-sign-out"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="content-wrapper">
    <div className="container-fluid">
      /*------ Breadcrumbs-----------*/
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <a href="#">Dashboard</a>
        </li>
        <li className="breadcrumb-item active">Blank Page</li>
      </ol>
      <div className="row">
        <div className="col-12">
          <h1>Blank</h1>
          <p>This is an example of a blank page that you can use as a starting point for creating new ones.</p>
        </div>
      </div>
    </div>
    /*------ /.container-fluid-----------*/
    /*------ /.content-wrapper-----------*/
    <footer className="sticky-footer">
      <div className="container">
        <div className="text-center">
          <small>Copyright © Your Website 2018</small>
        </div>
      </div>
    </footer>
    /*------ Scroll to Top Button-----------*/
    <a className="scroll-to-top rounded" href="#page-top">
      <i className="fa fa-angle-up"></i>
    </a>
    /*------ Logout Modal-----------*/
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div className="modal-footer">
            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a className="btn btn-primary" href="#">Logout</a>
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
            <p>© 2018 Copyright Text </p>
        </div>
    </footer>

      </div>;
}

export default Login;
