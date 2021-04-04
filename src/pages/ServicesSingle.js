import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero/Others';
import services from '../utils/serviceSingle';
import Teaser from '../components/Teaser';

const Service = () => {
  let page = {};

  const currentPath = useLocation().pathname;
  const pathName = currentPath.replace('/services/', '');

  services.forEach(sv => {
    if (sv.name === pathName) {
      page = sv;
    }
  });

  return (
    <section>
      <Hero data={page}/>

      <div className="ftco-section">
        <div className="container-xl">
         <Teaser data={page} />
        </div>
      </div>
    </section>
  );
};

export default Service;
