import React from 'react';
import { Link } from 'react-router-dom';
import eventts from '../utils/events';

const Events = () => {
  const Attach = ev => (
    <div className="col-md-6 col-lg-4 d-flex" key={ev.link}>
    <div className="blog-entry justify-content-end">
      <Link to={`/event/${ev.link}`} className="block-20 img" style={{backgroundImage: `url(${ev.image})`}}>
      </Link>
      <div className="text">
        <p className="meta"><i className="fa fa-calendar me-1"></i>{ev.startdate} &nbsp;
        {
          ev.enddate ?
          <>- &nbsp; <i className="fa fa-calendar me-1"></i>{ev.enddate}</>
          : ''
        }
        </p>
        <h3 className="heading mb-3">
          <Link to={`/event/${ev.link}`}>{ev.title}</Link>
          </h3>
        <p>{ev.message}</p>
      </div>
    </div>
  </div>
  );

  return (
    <section className="ftco-section bg-light ftco-no-pt">
      <div className="container-xl">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center">
            <span className="subheading">updates</span>
            <h2>Nkhangfi Activities & Events</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          {eventts.map(Attach)}
        </div>
      </div>
    </section>
  );
}

export default Events;
