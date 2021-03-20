import React, { useEffect } from 'react';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Homepage';

const NkhangfiTravel = () => {
  useEffect(() => {
    setActive('nav-travel');

    return () => {
      removeActive('nav-travel')
    };
  }, []);

  return (
    <section>
      <Hero />
    </section>
  );
};

export default NkhangfiTravel;
