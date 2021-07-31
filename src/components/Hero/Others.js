import React from 'react';
// import { Link } from 'react-router-dom';
import '../../css/style.css'
import '../../css/hero.css'

const Hero = props => {
  const {
    name,
    bg,
    theme,
    parent,
  } = props.data;

  return (
    <section className={`${bg} hero-wrap hero-wrap2`}>
      <div className="container">
        <div className="row no-gutters slider-text align-items-center justify-content-center">

          <div className="col-md-9 pt-5 mt-5 text-center">
            <p className="breadcrumbs">
              <span className="me-2">
                <span>{parent} <i className="fa fa-chevron-right"></i></span>
              </span>
              <span>
                {name} <i className="fa fa-chevron-right"></i>
              </span>
            </p>
            <h1 className="mb-0 bread text-capitalize">{theme}</h1>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
