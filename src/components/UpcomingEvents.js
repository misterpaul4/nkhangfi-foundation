import React from 'react';
import { Link } from 'react-router-dom';
import bgYos from '../images/events/yos1.png';
import bgNsp from '../images/events/nsp1.png';

const Events = () => {
  const eventts = [
    {
      startdate: "May. 10, 2021",
      enddate: "May. 24, 2021",
      title: "Turkish Foreign Student Entrance Exams (Y.Ö.S)",
      message: "Register for the Y.Ö.S exams to study in Turkey for as low as $150 USD - $250 USD. Examination will be conducted in Cameroon, Ivory Coast, Togo, Guinea, Liberia & Sierra Leone ",
      image: bgYos,
      link: "yos2021",
    },
    {
      startdate: "May. 31, 2021",
      enddate: "June. 19, 2021",
      title: "Nkhangfi Scholarship Program (NSP) 2021",
      link: "nsp2021",
      image: bgNsp,
      message: "The Nkhangfi Scholarship Program will consist of the following events, seminar, workfair, main exams, award ceremony & workshop. Scholarships ranging from 25% to 80% will be distributed to students based on merit",
    }
  ];

  const Attach = ev => (
    <div className="col-md-6 col-lg-4 d-flex">
    <div className="blog-entry justify-content-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
      <Link to={`/event/${ev.link}`} className="block-20 img" style={{backgroundImage: `url(${ev.image})`}}>
      </Link>
      <div className="text">
        <p className="meta"><i className="fa fa-calendar me-1"></i>{ev.startdate} &nbsp; - &nbsp; <i className="fa fa-calendar me-1"></i>{ev.enddate}</p>
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
        <div className="col-md-7 heading-section text-center" data-aos="fade-up" data-aos-duration="1000">
          <span className="subheading">events</span>
          <h2>Upcoming Events</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        {eventts.map(Attach)}
        <Link to={"/event/overview"} className="text-center">View All</Link>
      </div>
    </div>
  </section>
  );
}

export default Events;
