import React, { useEffect } from 'react';
import Hero from '../components/Hero/Homepage';
import {setActive, removeActive} from '../utils/activeLink';
import '../css/style.css';
import About from '../components/About';
import Progress from '../components/Progress';
import StudyAbroad from '../components/IconTitleMoreGrid';
import Teaser from '../components/Teaser';
import Slider from '../components/Slider';
import Testimonial from '../components/Testimonial';

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
        <p>The Nkhangfi Foundation Team sources for scholarships in reputable and world-className universities around the globe. We bring them to students in African communities who have little or no financial resources to travel abroad to continue their undergraduate or post-graduate studies.</p>
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
  };

  const studyAbroadObjGrid = [
  {
    icon: "flaticon-design",
    title: "study in australia",
    key: "australia"
  },
  {
    icon: "flaticon-paint-palette",
    title: "study in belarus",
    key: "belarus"
  },
  {
    icon: "flaticon-computer-science",
    title: "study in china",
    key: "china"
  },
  {
    icon: "flaticon-magnifying-glass",
    title: "study in cyprus",
    key: "cyprus"
  },
  {
    icon: "flaticon-engineer",
    title: "study in poland",
    key: "poland"
  },
  {
    icon: "flaticon-dumbbell",
    title: "study in ukraine",
    key: "ukraine"
  }
  ];

  const studyAbroadTease = {
    title: "nkhangfi scholarship program (nsp)",
    catchphrase: "Study Abroad For Less",
    message: () => (
      <>
        <p>message about nkhangfi scholarship program
        </p>
      </>
    ),
    actionLink: "/event/nsp",
  };

  const travelServiceTease = {
    title: "nkhangfi Travel",
    catchphrase: "Explore Some Of The Nkhangfi Travel Services",
    message: () => (
      <>
       <p>message about travel services and mini history</p>
      </>
    ),
    actionLink: "/services/overview",
  }

  const travelServiceSlide = [
    {
      icon: "fab fa-cc-visa",
      title: "visa assitance",
      message: "message about nkhangfi tour packages such as honeymoon package and their prices",
      actionLink: "/services/tours",
      action: "check it out",
    },
    {
      icon: "fas fa-plane-departure",
      title: "flight reservation & booking",
      message: "message about nkhangfi tour packages such as honeymoon package and their prices",
      actionLink: "/services/tours",
      action: "check it out",
    },
    {
      icon: "fas fa-umbrella-beach",
      title: "tour packages",
      message: "message about nkhangfi tour packages such as honeymoon package and their prices",
      actionLink: "/services/tours",
      action: "check it out",
    },
    {
      icon: "fas fa-plane-departure",
      title: "work & travel programs",
      message: "message about nkhangfi tour packages such as honeymoon package and their prices",
      actionLink: "/services/tours",
      action: "check it out",
    },
    {
      icon: "fas fa-hotel",
      title: "hotel reservation & airport pickUp",
      message: "message about nkhangfi tour packages such as honeymoon package and their prices",
      actionLink: "/services/tours",
      action: "check it out",
    },
    {
      icon: "fas fa-language",
      title: "translation services",
      message: "message about nkhangfi tour packages such as honeymoon package and their prices",
      actionLink: "/services/tours",
      action: "check it out",
    }
  ]

  return (
    <>
      <Hero />
      <About data={aboutObj} />

      {/* benefits */}
      <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container-xl">
        <div className="row g-xl-5">
          <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="img w-100 benefit-img">
            </div>
          </div>
          <div className="col-md-6 heading-section d-flex align-items-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <div className="mt-0 my-lg-5 py-5">
              <span className="subheading">Benefits</span>
              <h2 className="mb-2">What Can I Benefit From Nkhangfi Foundation?</h2>
              <div className="row mt-4 g-lg-2">

                <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                  <div className="services d-flex">
                    <div className="icon"><span className="flaticon-certificate"></span></div>
                    <div className="text">
                      <h2>Scholarship opportunities for over 2,000 courses from 27 Universities</h2>
                      <p className="mb-0">
                        Study in some of the best universities in the top countries in Europe. Benefit from 25% - 100% scholarships in Cyprus, Belarus, Turkey, Poland and more.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                  <div className="services d-flex">
                    <div className="icon"><span className="flaticon-scientist"></span></div>
                    <div className="text">
                      <h2>Work abroad opportunities</h2>
                      <p className="mb-0">Nkhangfi Foundation holds regular work fair programs for those that wish to work in Canada, Croatia, Hungary, Lithuania, Mexico, Poland, Romania & more.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 d-flex align-items-stretch services-wrap">
                  <div className="services d-flex">
                    <div className="icon"><span className="flaticon-online-learning"></span></div>
                    <div className="text">
                      <h2>Support</h2>
                      <p className="mb-0">Benefit from a huge support system. We never leave our clients behind. Be a part of the Nkhangfi family.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Progress />

      {/* NSP */}
      <section className="ftco-section">
        <div className="container-xl">
          <Teaser data={studyAbroadTease}/>
          <StudyAbroad data={studyAbroadObjGrid}/>
        </div>
      </section>

      {/* travel services */}
      <section className="ftco-section courses-section ftco-no-pb">
        <div className="container">
          <Teaser data={travelServiceTease}/>
          <Slider data={travelServiceSlide}/>
        </div>
      </section>

      <Testimonial />
    </>
  );
}

export default Homepage;
