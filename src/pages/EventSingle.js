import React, { useEffect } from 'react';
import Hero from '../components/Hero/Others';
import { useLocation } from 'react-router-dom';
import {setActive, removeActive } from '../utils/activeLink';
import events from '../utils/events';
import Form from '../components/ContactForm';
import FAQ from '../components/FAQ';
import EventTemplate from '../components/EventSingleTemplate';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      if (sv.link === paTH) {
        page = sv;
      }
    });
  };

  return (
    <section>
      <Header />
      <Hero data={page}/>
      <EventTemplate data={page} />

      {
        page.extraContent ?
      <>
        <Form data={page}/>
      <FAQ />
        </>
        :
        null
      }
      <Footer />
    </section>
  );
};

export default Event;
