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
    name: "activities",
    bg: "nk-events-bg",
    theme: "activities & events",
    parent: "home",
  };

  return (
    <section>
      <Hero data={heroContent} />
      <div className="mt-4">
        <Allevent numPostsPerPage={3} />
      </div>
      <Newsletter />
    </section>
  );
};

export default Events;
