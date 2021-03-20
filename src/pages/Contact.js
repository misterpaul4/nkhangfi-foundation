import React, { useEffect } from 'react';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Homepage';

const Contact = () => {
  useEffect(() => {
    setActive('nav-contact');

    return () => {
      removeActive('nav-contact')
    };
  }, []);

  return (
    <section>
      <Hero />
    </section>
  );
}

export default Contact;
