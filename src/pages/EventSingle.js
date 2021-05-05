import React, { useEffect } from 'react';
import Hero from '../components/Hero/Others';
import { useLocation } from 'react-router-dom';
import {setActive, removeActive } from '../utils/activeLink';
import events from '../utils/Events';
import Form from '../components/ContactForm';
import FAQ from '../components/FAQ';

const Event = props => {
  const getPageFromprops = props.location.event;

  useEffect(() => {
    setActive('nav-event');

    return () => {
      removeActive('nav-event')
    };
  }, []);


  const currentPath = useLocation().pathname;
  const paTH = currentPath.replace('/event/', '');

  let page;


  if (getPageFromprops) {
    page = getPageFromprops;
  } else {
    events.forEach(sv => {
      if (sv.pathName === paTH) {
        page = sv;
      }
    });
  };

  return (
    <section>
      <Hero data={page}/>
      <section className="ftco-section">
        <div className="container">
          <div className="row">

            <div className="col-lg-8 blog-single">
              <h2 className="mb-3 text-capitalize">{page.title}</h2>
              <p>{page.messageTop}</p>
              <p><img src={page.image} alt="event" className="img-fluid"></img></p>
              {page.messageBottom()}
            </div>

            <div className="col-lg-4 sidebar pl-md-4">
              <div className="sidebar-box">
                {page.sideContent()}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Form data={page}/>
      <FAQ />
    </section>
  );
};

export default Event;
