import React from 'react';
// import { Link } from 'react-router-dom';
import '../../css/style.css'
import '../../css/homepage.css'

const Hero = props => {
  return (
    <section className={`${props.bg} hero-wrap hero-wrap2`}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">

          <div class="col-md-9 pt-5 mt-5 text-center">
            <p class="breadcrumbs"><span class="me-2"><a href="index.html">Home <i class="fa fa-chevron-right"></i></a></span> <span>Courses <i class="fa fa-chevron-right"></i></span></p>
            <h1 class="mb-0 bread">Explore Courses</h1>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
