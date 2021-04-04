import React, { useEffect } from 'react';
import Hero from '../components/Hero/Homepage';
import {setActive, removeActive } from '../utils/activeLink';

const Event = () => {
  useEffect(() => {
    setActive('nav-event');

    return () => {
      removeActive('nav-event')
    };
  }, []);

  return (
    <section>
      <Hero />
      <p>nkhangfi Event Single page</p>
    </section>
  );
};

export default Event;
