import React from 'react';

const Progress = () => {
  return (
    <section className="ftco-section-counter img progress-bg">
      <div className="overlay"></div>
      <div className="container">
        <div className="row section-counter">
          <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
            <div className="counter-wrap-2 d-flex" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
              <div className="icon">
                <span className="flaticon-graduation"></span>
              </div>
              <div className="text">
                <h2 className="number"><span className="countup">952</span></h2>
                <span className="caption">Success Stories</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
            <div className="counter-wrap-2 d-flex" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <div className="icon">
                <span className="flaticon-scientist"></span>
              </div>
              <div className="text">
                <h2 className="number"><span className="countup">24</span></h2>
                <span className="caption">Team Members</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
            <div className="counter-wrap-2 d-flex" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
              <div className="icon">
                <span className="flaticon-calendar"></span>
              </div>
              <div className="text">
                <h2 className="number"><span className="countup">98.5</span><span>%</span></h2>
                <span className="caption">Business Success</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
            <div className="counter-wrap-2 d-flex" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
              <div className="icon">
                <span className="flaticon-learning"></span>
              </div>
              <div className="text">
                <h2 className="number"><span className="countup">209</span></h2>
                <span className="caption">Scholarships Awarded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
