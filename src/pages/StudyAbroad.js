import React, { useEffect } from 'react';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Homepage';

const StudyAbroad = () => {
  useEffect(() => {
    setActive('nav-study');

    return () => {
      removeActive('nav-study')
    };
  }, []);

  return (
    <section>
      <Hero />
    </section>
  );
};

export default StudyAbroad;
