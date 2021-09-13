import React from 'react';
import { Link } from 'react-router-dom';
import Quote from '../Quotes';
// import arrow from '../../images/arrow.gif';
import '../../css/style.css';
import '../../css/hero.css';

const Hero = () => {
  return (
    <section className='homepage-hero-bg hero-wrap'>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center">
        	<div className="col-lg-5">
            <div className="text mt-5 pt-5 container hp-hero-content" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <span className="subheading text-sm-left text-center">Welcome to Nkhangfi Foundation</span>
              <div className="d-sm-block d-none">
          		<h1 className="mb-4">Give Your Child An Opportunity</h1>
              <Quote />
              </div>
          		<p>
              <Link to={{pathname: "/work_abroad/application_form"}} className="btn btn-primary p-4 py-3 m-1">WORK ABROAD PROGRAM
              <i className="fas fa-briefcase ml-1"></i>
              {/* <span className="fas fa-long-arrow-alt-right"></span> */}
              </Link>
                <Link to={{pathname: "/nkhangfi_scholarship_scheme/application_form"}} className="btn btn-white p-4 py-3 m-1">STUDY ABROAD  SCHOLARSHIP PROGRAM
                <i className="fas fa-graduation-cap ml-1"></i>
                {/* <span className="fas fa-long-arrow-alt-right"></span> */}
                </Link>
                {/* <button className="btn btn-white p-4 py-3 m-1">Application Form</button> */}
              </p>
            </div>
        	</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
