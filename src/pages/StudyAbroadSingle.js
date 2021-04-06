import React, { useEffect } from 'react';
import Hero from '../components/Hero/Homepage';

const StudyDestination = () => {
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

export default StudyDestination;
