import React from 'react';
import { Link } from 'react-router-dom';

const Grid = props => {
  const destinations = props.data;

  const Attach = data => {
    const { icon, title, key } = data;

    return (
      <div key={key} className="col-md-3 col-xl-2 text-center d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
        <Link to={`studyAbroad/${key}`} className="services-2">
          <div className="icon"><span className={icon}></span></div>
          <div className="text">
            <h2 className="text-capitalize">{title}</h2>
            <span>Learn More</span>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <div className="row g-lg-2 justify-content-center">
      {destinations.map(Attach)}
    </div>
  );
}

export default Grid;
