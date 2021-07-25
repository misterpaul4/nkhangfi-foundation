import React, { useEffect } from 'react';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Others';
import galleryImages from '../utils/gallery';
import Newsletter from '../components/Newsletter';
import Testimonial from '../components/Testimonial';
import '../css/gallery.css';

const Gallery = () => {
  useEffect(() => {
    setActive('nav-gallery');

    return () => {
      removeActive('nav-gallery')
    };
  }, []);

  const heroContent = {
    name: "gallery",
    bg: "nk-gallery-bg",
    theme: "gallery",
    parent: "home",
  };

  const Attach = gImg => (
    <div className="gallery-img m-2">
      <img src={gImg.image} alt={gImg.alt} className="h-100 g-img-box"></img>
      <div className="gallery-img-caption w-100 text-center">{gImg.alt}</div>
    </div>
  );

  return (
    <section>
      <Hero data={heroContent}/>
      <div className="container py-5">
        <h1 className="text-center">Gallery</h1>
        <div className="d-flex justify-content-center flex-wrap gallery-img-container">
          {galleryImages.map(Attach)}
        </div>
      </div>

      <Newsletter />
      <Testimonial />
    </section>
  );
};

export default Gallery;
