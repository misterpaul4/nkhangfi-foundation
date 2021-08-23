import React, { useEffect } from 'react';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Others';
import Allevent from '../components/UpcomingEvents';
import Newsletter from '../components/Newsletter';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
      <Header />
      <Hero data={heroContent} />
      <div className="mt-4">
        <Allevent numPostsPerPage={9} />
      </div>
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Events;
