import React from 'react';
import { Link } from 'react-router-dom';

const Slider = props => {
  const services = props.data;

  const Attach = service => {
    const { icon, title, message, actionLink, action } = service;

    return (
      <div className="item">
      <div className="courses">
        <div className="d-flex">
          <div className="icon"><span className={icon}></span></div>
          <div className="text">
            <h2>{title}</h2>
            <p>{message}</p>
          </div>
        </div>
        <div className="text-center">
          <Link to={actionLink} className="btn d-block btn-primary btn-outline-primary py-3">{action}</Link>
        </div>
      </div>
    </div>
    );
  };

  return (
    <div className="row">
      <div className="col-md-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <div className="carousel-courses">
          {services.map(Attach)}
        </div>
      </div>
    </div>
  );
};

export default Slider;
