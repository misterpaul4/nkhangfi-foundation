import React, { useEffect } from 'react';
import Hero from '../components/Hero/Homepage';
import {setActive, removeActive} from '../utils/activeLink';
import '../css/style.css';

function Homepage() {
  useEffect(() => {
    setActive('nav-home');

    return () => {
      removeActive('nav-home')
    };
  }, []);

  return (
    <>
      <Hero />
    </>
  );
}

export default Homepage;
