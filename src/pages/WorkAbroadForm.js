import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero/Others';
import Footer from '../components/Footer';
import BootstrapForm from '../components/BootstrapForm';
import { workApplciation } from '../utils/Forms';
import '../css/form.css';

const WorkAbroadApplication = () => {

  const heroContent = {
    name: "work",
    bg: "nk-work-bg",
    theme: "work abroad application",
    parent: "nkhangfi",
  };

  return (
    <section>
      <Header />
      <Hero data={heroContent}/>
      <div>
        <BootstrapForm data={{
            formName: "Get Started",
            formNameFrench: "Commencer",
            submissionLink: workApplciation,
            formType: "work",
          }
        }
        />
      </div>

      <Footer />
    </section>
  );
};

export default WorkAbroadApplication;
