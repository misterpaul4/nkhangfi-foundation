import React, { useEffect } from 'react';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Homepage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StudyAbroad = () => {
  useEffect(() => {
    setActive('nav-study');

    return () => {
      removeActive('nav-study')
    };
  }, []);

  return (
    <section>
      <Header />
      <Hero />
      <Footer />
    </section>
  );
};

export default StudyAbroad;
