import React, { useEffect } from 'react';
import Hero from '../components/Hero/Homepage';
import {setActive, removeActive} from '../utils/activeLink';

const Team = () => {
  useEffect(() => {
    setActive('nav-team');

    return () => {
      removeActive('nav-team')
    };
  }, []);

  return (
    <section>
      <Hero />
    </section>
  );
}

export default Team;
