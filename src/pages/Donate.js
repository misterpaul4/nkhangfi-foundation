import React from 'react';
import Hero from '../components/Hero/Others';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Donate = () => {
  const heroContent = {
    name: "donate",
    bg: "nk-payment-bg",
    theme: "donate",
    parent: "home",
  };

  return (
    <div>
      <Header />
      <Hero data={heroContent} />

      <div className="py-5 d-flex flex-column justify-content-center">
        <h1 className="text-center">Account Details</h1>
        <div className="border container">
          <h5>Bank Name</h5>
          <span>United Bank for Africa Plc (UBA)</span>

          <h5 className="mt-4">Bank Account Name</h5>
          <span>Nkhangfi Foundation</span>

          <h5 className="mt-4">Bank Account Number</h5>
          <span>540110110000766</span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donate;
