import React, { useEffect } from 'react';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Others';
import Allevent from '../components/UpcomingEvents';
import Newsletter from '../components/Newsletter';

const Events = () => {
  useEffect(() => {
    setActive('nav-event');

    return () => {
      removeActive('nav-event')
    };
  }, []);

  const heroContent = {
    name: "events",
    bg: "nk-events-bg",
    theme: "events",
    parent: "home",
  };

  return (
    <section>
      <Hero data={heroContent} />
      <div className="mt-4">
        <Allevent />
      </div>
      <Newsletter />
    </section>
  );
};

export default Events;
