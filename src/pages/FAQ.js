import React, { useEffect } from 'react';
import Hero from '../components/Hero/Others';
import FAQs from '../components/FAQ';
import Newsletter from '../components/Newsletter';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Events = () => {
  useEffect(() => {

    return null;
  }, []);

  const heroContent = {
    name: "faq",
    bg: "nk-faq-bg",
    theme: "frequently asked questions",
    parent: "home",
  };

  return (
    <section>
      <Header />
      <Hero data={heroContent} />
      <div className="mt-4">
        <FAQs />
      </div>
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Events;
