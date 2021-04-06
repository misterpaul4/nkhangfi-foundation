import React, { useEffect } from 'react';
import Hero from '../components/Hero/Homepage';

const NkhangfiTravel = () => {
  useEffect(() => {
    window.scrollTo(-1, 0);

    return null;
  }, []);

  return (
    <section>
      <Hero />

    </section>
  );
};

export default NkhangfiTravel;
