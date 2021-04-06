import React, { useEffect } from 'react';
import Hero from '../components/Hero/Others';
import FAQs from '../components/FAQ';
import Newsletter from '../components/Newsletter';

const Events = () => {
  useEffect(() => {
    window.scrollTo(-1, 0);

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
      <Hero data={heroContent} />
      <div className="mt-4">
        <FAQs />
      </div>
      <Newsletter />
    </section>
  );
};

export default Events;
