import React from 'react';
import { Link } from 'react-router-dom';
import '../css/slider.css';

const Slider = props => {
  const slides = props.data;

  const Attach = service => {
    const { icon, title, message, actionLink, action } = service;


    // <div className="col-xl-4 col-lg-5 col-md-6" key={title}>

    return (
      <div key={title} className="col-xl-4 col-lg-5 col-md-6">
        <div className="courses">
          <div className="d-flex">
            <div className="icon"><span className={icon}></span></div>
            <div className="text">
              <h2 className="text-capitalize">{title}</h2>
              <p>{message}</p>
            </div>
          </div>
          <div className="text-center">
            {
              actionLink ?
              <Link to={actionLink} className="d-block py-3">{action}</Link>
              :
              null
            }
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row justify-content-center align-items-start">
        {slides.map(Attach)}
    </div>
  );
};

export default Slider;
