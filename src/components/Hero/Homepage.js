import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css'
import '../../css/homepage.css'

const Hero = () => {
  return (
    <section className='homepage-hero-bg hero-wrap'>
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center">
        	<div className="col-lg-5">
            <div className="text mt-5 pt-5" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <span className="subheading">Welcome to Nkhangfi Foundation</span>
          		<h1 className="mb-4">Give Your Child An Opportunity</h1>
              <p className="mb-4">"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed."</p>
              <p>- Ray Goforth</p>
          		<p>
                <Link to={"/scholarshipProgram"} className="btn btn-primary p-4 py-3">scholarship program (NSP)<span className="fas fa-long-arrow-alt-right"></span></Link>
                <Link to={"/YÖS"} className="btn btn-white p-4 py-3">Y.Ö.S Turkey <span className="fas fa-long-arrow-alt-right"></span></Link>
              </p>
            </div>
        	</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
