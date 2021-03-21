import React, { useEffect } from 'react';
import Hero from '../components/Hero/Homepage';
import {setActive, removeActive} from '../utils/activeLink';
import '../css/style.css';
import About from '../components/About';

function Homepage() {
  useEffect(() => {
    setActive('nav-home');

    return () => {
      removeActive('nav-home')
    };
  }, []);

  const aboutObj = {
    title: "who we are",
    catchphrase: "building lives, shaping destiny",
    message: () => (
      <>
        <p>A Non-Governmental organization developed by young African Educational Consultants and Travel Agencies from different countries, using education as a tool to alleviate poverty in Africa.</p>
        <p>The Nkhangfi Foundation Team sources for scholarships in reputable and world-class universities around the globe. We bring them to students in African communities who have little or no financial resources to travel abroad to continue their undergraduate or post-graduate studies.</p>
      </>
    ),
    spread: [
      {
        icon: "fas fa-plug",
        heading: "Our Mission",
        paragraph: "to provide educational and logistical support to African students through scholarships to study and acquire much-needed skills in reputable and affordable universities abroad",
      },
      {
        icon: "fas fa-hourglass-half",
        heading: "Our Vision",
        paragraph: "to equip and empower less privileged African students with top-notch education and skills through scholarship programs in foreign universities. Skills which will enable them to use in facilitating development in their home countries in Africa",
      },
      {
        icon: "fas fa-bullseye",
        heading: "Our Goal",
        paragraph: "to annually create and support innovative workshops and educational scholarship programs that would otherwise not be available to most African students. Cultivate  partnerships with foreign universities and the local community to provide the resources necessary to ensure deserving students get the support they need to have a better future through quality higher education",
      }
    ],
  }

  return (
    <>
      <Hero />
      <About data={aboutObj} />
    </>
  );
}

export default Homepage;
