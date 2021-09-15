import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero/Others';
import Footer from '../components/Footer';
import BootstrapForm from '../components/BootstrapForm';
import { scholarshipApplication } from '../utils/Forms';
import '../css/form.css';

const StudyApplication = () => {

  const heroContent = {
    name: "scholarship",
    bg: "nk-china-bg",
    theme: "scholarship application",
    parent: "nkhangfi",
  };

  return (
    <section>
      <Header />
      <Hero data={heroContent}/>
      <div>
        <BootstrapForm data={{
            formName: "Get Started",
            submissionLink: scholarshipApplication,
            formType: "studies",
          }
        }
        />
      </div>

      <Footer />
    </section>
  );
};

export default StudyApplication;
