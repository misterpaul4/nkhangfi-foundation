import React, { useEffect } from 'react';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Homepage';

const Careers = () => {
  useEffect(() => {
    setActive('nav-careers');

    return () => {
      removeActive('nav-careers')
    };
  }, []);

  return (
    <section>
      <Hero />
    </section>
  );
};

export default Careers;
