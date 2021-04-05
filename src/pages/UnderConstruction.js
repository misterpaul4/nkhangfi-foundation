import React from 'react';
import Hero from '../components/Hero/Others';
import Newsletter from '../components/Newsletter';
import Form from '../components/ContactForm';
import { contactForm } from '../utils/Forms';

const UnderConstruction = () => {
  const heroData = {
    name: "under construction",
    parent: "nkhangfi travel",
    bg: "nk-503-bg",
    theme: "under construction",
  }

  const formData = {
    FORMSPARK_ACTION_URL: contactForm,
    formName: "contact",
    formExtrasEduc: false,
  };

  return (
    <section>
      <Hero data={heroData} />
      <div className="text-center container p-5 border">
        <h1><i class="fas fa-tools mr-2"></i>We are currently working on this page</h1>
        <p>This page is currently being worked on. Please exercise patience. In the meantime, you can send your querries directly on the contact form below</p>
      </div>

      <Form data={formData}/>
      <Newsletter />
    </section>
  );
};

export default UnderConstruction;
