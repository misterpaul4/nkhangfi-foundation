import React, { useEffect} from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero/Others';
import Footer from '../components/Footer';
import BootstrapForm from '../components/BootstrapForm';
import { scholarshipApplication } from '../utils/Forms';
import '../css/form.css';

const StudyApplication = () => {
  useEffect(() => {

    return null;
  }, []);

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
            submissionLink: scholarshipApplication
          }
        }
        />
      </div>

      <Footer />
    </section>
  );
};

export default StudyApplication;
