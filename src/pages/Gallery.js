import React, { useEffect } from 'react';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Homepage';

const Gallery = () => {
  useEffect(() => {
    setActive('nav-gallery');

    return () => {
      removeActive('nav-gallery')
    };
  }, []);

  return (
    <section>
      <Hero />
    </section>
  );
};

export default Gallery;
