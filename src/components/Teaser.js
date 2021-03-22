import React from 'react';
import { Link } from 'react-router-dom';

const Teaser = props => {
  const { title, catchphrase, message, actionLink } = props.data;
  return (
    <div className="row justify-content-center">
    <div className="col-md-8 heading-section text-center mb-5" data-aos="fade-up" data-aos-duration="1000">
      <span className="subheading">{title}</span>
      <h2 className="mb-4 text-capitalize">{catchphrase}</h2>
      {message()}
      {actionLink ?
      <Link to={actionLink} className="btn link-to-btn">Learn More</Link>
      :
      null
    }
    </div>
  </div>
  );
};

export default Teaser;
