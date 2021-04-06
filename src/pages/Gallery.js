import React, { useEffect } from 'react';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Homepage';

const Gallery = () => {
  useEffect(() => {
    setActive('nav-gallery');
    window.scrollTo(-1, 0);

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
