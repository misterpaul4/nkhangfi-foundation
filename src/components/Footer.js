import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="ftco-footer">
    <div className="container-xl">
      <div className="row mb-5 justify-content-between">
        <div className="col-md-6 col-lg">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2 logo d-flex">
              <img src={logo} alt="logo" className="header-logo"></img>
              <Link to={"/"} className="navbar-brand align-items-center footer-brand">
                nkhangfi <br></br> Foundation
                <span>Building Lives, Shaping Destiny</span>
              </Link>
            </h2>
            <ul className="ftco-footer-social list-unstyled mt-2">
              <li><Link to={{pathname: "https://www.facebook.com/Nkhangfitravelandbusinesscentre"}} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span className="fab fa-facebook-f"><i className="sr-only">Facebook</i></span></Link>
              </li>

              <li><Link to={{pathname: "https://twitter.com/nkhangfi"}} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span className="fab fa-twitter"><i className="sr-only">Twitter</i></span></Link></li>

              <li><Link to={{pathname: "https://www.instagram.com/nkhangfitravel/"}} target="_blank" rel="noopener noreferrer" className="d-flex align-items-center justify-content-center"><span className="fab fa-instagram"><i className="sr-only">Instagram</i></span></Link></li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-lg-2">
           <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Quick Links</h2>
            <ul className="list-unstyled">
              <li><Link to={"/contact"}><span className="fas fa-long-arrow-alt-right me-2"></span>Contact</Link></li>
              <li><Link to={"/gallery"}><span className="fas fa-long-arrow-alt-right me-2"></span>Gallery</Link></li>
              <li><Link to={"/contact"}><span className="fas fa-long-arrow-alt-right me-2"></span>F.A.Q</Link></li>
              <li><Link to={"/services/overview"}><span className="fas fa-long-arrow-alt-right me-2"></span>Nkhangfi Travel</Link></li>
              <li><Link to={"/team"}><span className="fas fa-long-arrow-alt-right me-2"></span>Our Team</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 col-lg">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Events</h2>

            <div className="block-21 mb-4 d-flex">
              {/* <a className="blog-img img rounded" style="background-image: url(images/events/yos1.png);"></a> */}
              <div className="text">
                <div className="meta">
                  {/* <div><a href="#"><i className="fa fa-calendar me-1"></i>May. 10, 2021 &nbsp; - &nbsp; <i className="fa fa-calendar me-1"></i>May. 24, 2021</a></div>                  </div> */}
                {/* <h3 className="heading"><a href="#">Turkish Foreign Student Entrance Exams (Y.Ö.S)</a></h3> */}
              </div>
            </div>

            <div className="block-21 mb-4 d-flex">
              {/* <a className="blog-img img rounded" style="background-image: url(images/events/nsp1.png);"></a> */}
              <div className="text">
                <div className="meta">
                  {/* <div><a href="#"><i className="fa fa-calendar me-1"></i>May. 31, 2021 &nbsp; - &nbsp; <i className="fa fa-calendar me-1"></i>June. 19, 2021</a></div>                  </div> */}
                {/* <h3 className="heading"><a href="#">Nkhangfi Scholarship Program (NSP) 2021</a></h3> */}
              </div>
            </div>

          </div>
        </div>

        <div className="col-md-6 col-lg">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Have a Questions?</h2>
            <div className="block-23 mb-3">
              <ul>
                <li><span className="icon fa fa-map marker"></span><span className="text">Awae 0000 Yaoundé, Cameroon</span></li>
                {/* <li><a href="tel:+232-33-313797"><span className="icon fa fa-phone"></span><span className="text">+23233313797</span></a>
                  <a href="tel:+232-33-313797"><span className="icon fa fa-phone"></span><span className="text">+35389976 0743</span></a>
                </li> */}
                {/* <li><a href="mailto: nkhangfitravel@gmail.com"><span className="icon fa fa-paper-plane"></span><span className="text">nkhangfitravel@gmail.com</span></a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid px-0 py-5 bg-darken">
      <div className="container-xl">
        <div className="row">
          <div className="col-md-12 text-center">
            {/* <p className="mb-0" style="font-size: 14px;">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Nkhangfi Foundation</p> */}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </footer>
  );
};

export default Footer;
