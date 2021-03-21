import React from 'react';

const About = props => {
  const {title, catchphrase, message, spread} = props.data;

  const AttachSpread = (data) => {
    const {icon, heading, paragraph} = data;

    return (
    <div className="item" key={heading}>
      <div className="courses">
        <div className="d-flex">
          <div className="icon"><span className={icon}></span></div>
          <div className="text">
            <h2 className="text-capitalize">{heading}</h2>
            <p className="spread-p">{paragraph}</p>
          </div>
        </div>
      </div>
    </div>
    );
  };

  return (
    <section className="ftco-section courses-section ftco-no-pb">
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div className="col-md-10 text-center heading-section" data-aos="fade-up">
            <span className="subheading">{title}</span>
            <h2 className="mb-5 text-capitalize">{catchphrase}</h2>
            {message()}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="flex-3 d-flex flex-wrap">
              {spread.map(AttachSpread)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
