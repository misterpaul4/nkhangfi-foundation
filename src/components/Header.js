import React from 'react';
  import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import Nav from './Nav';

const Header = props => {
  return (
  <header>
    <div className="top-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md col-lg-5 d-flex align-items-center">
            <img src={logo} alt="logo" className="header-logo"/>
            <Link to={'/'} className="navbar-brand align-items-center">
            Nkhangfi Foundation <span>building lives, shaping destiny</span>
            </Link>
          </div>

          <div className="col-md d-xl-flex d-none align-items-center">
            <div className="con d-flex align-items-center">
              <div className="icon"><span className="far fa-clock"></span></div>
              <div className="text">
                <span>Monday - Friday</span>
                <strong>8:00AM-4:00PM</strong>
              </div>
            </div>
          </div>

          <div className="col-md d-xl-flex d-none align-items-center">
            <div className="con d-flex align-items-center">
              <div className="icon"><span className="fas fa-phone-alt"></span></div>
              <div className="text">
                {/* call functionality */}
                <span><strong>+23233313797</strong></span>
                <span><strong>+905338245235</strong></span>
              </div>
            </div>
          </div>

          <div className="col-md d-flex justify-content-end align-items-center">
            <div className="social-media">
              <p className="mb-0 d-flex">
                <Link to={{pathname: "https://www.facebook.com/Nkhangfifoundation"}} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span className="fab fa-facebook-f"><i className="sr-only">Facebook</i></span></Link>
                <Link to={{pathname: "https://twitter.com/nkhangfi"}} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span className="fab fa-twitter"><i className="sr-only">Twitter</i></span></Link>
                <Link to={{pathname: "https://www.instagram.com/nkhangfi_foundation//"}} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span className="fab fa-instagram"><i className="sr-only">Instagram</i></span></Link>
                <Link to={{pathname: "mailto: info@nkhangfitravel.com"}} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span className="fa fa-envelope"><i className="sr-only">Email</i></span></Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Nav />
  </header>);
};

export default Header;
