import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero/Others';
import services from '../utils/serviceSingle';
import Teaser from '../components/Teaser';
import Testimonial from '../components/Testimonial';
import Newsletter from '../components/Newsletter';
import Form from '../components/ContactForm';
import '../css/services.css';

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
          <div>
            <Teaser data={page} className="text-left" />
            <div className="row justify-content-center img-show-gird">
              {page.images()}
            </div>
          </div>
        </div>
      </div>

      <Form />
      <Newsletter />
      <Testimonial />
    </section>
  );
};

export default Service;
