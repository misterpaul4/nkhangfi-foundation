import React from 'react';
import { Link } from 'react-router-dom';
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
              <span className="subheading">Welcome to Nkhangfi Foundation</span>
          		<h1 className="mb-4">Give Your Child An Opportunity</h1>
              <p className="mb-4">"It looks impossible until you take a step. The path might look difficult, but start the journey & you will become all that you ever dreamt of becoming."</p>
              <p>- Neche</p>
          		<p>
                <Link to={"/event/nsp"} className="btn btn-primary p-4 py-3 m-1">scholarship program (NSP)<span className="fas fa-long-arrow-alt-right"></span></Link>
                <Link to={"/event/yos"} className="btn btn-white p-4 py-3 m-1">Y.Ö.S Turkey <span className="fas fa-long-arrow-alt-right"></span></Link>
              </p>
            </div>
        	</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
