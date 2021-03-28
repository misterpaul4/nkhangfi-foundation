import React from 'react';
import { Link } from 'react-router-dom';
import '../css/slider.css';

const Slider = props => {
  const services = props.data;

  const Attach = service => {
    const { icon, title, message, actionLink, action } = service;

    return (
      <div className="col-xl-4 col-lg-5 col-md-6">
        <div className="courses">
          <div className="d-flex">
            <div className="icon"><span className={icon}></span></div>
            <div className="text">
              <h2 className="text-capitalize">{title}</h2>
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
    <div className="row justify-content-center align-items-end">
        {services.map(Attach)}
    </div>
  );
};

export default Slider;
