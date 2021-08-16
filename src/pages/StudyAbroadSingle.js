import React, { useEffect } from 'react';
import Hero from '../components/Hero/Others';
import { useLocation } from 'react-router-dom';
// import {setActive, removeActive} from '../utils/activeLink';
import destinations from '../utils/Study';
import Form from '../components/ContactForm';
import { studyAbroadFormUrl } from '../utils/Forms';
import Progress from '../components/Progress';

const StudyDestination = () => {
  useEffect(() => {
    // setActive('nav-study');

    return () => {
      // removeActive('nav-study')
    };
  }, []);


  const currentPath = useLocation().pathname;
  const paTH = currentPath.replace('/studyAbroad/', '');

  let page;

  destinations.forEach(destination => {
    if (destination.name === paTH) {
      page = destination;
    }
  });

  const Attach = em => <li key={em}>{em}</li>;

  const formData = {
    FORMSPARK_ACTION_URL: studyAbroadFormUrl,
    formName: `${page.name} study application`,
    formExtrasEduc: true,
    studyDestinationProvided: page.name,
  }

  return (
    <section>
      <Hero data={page} />

      <section className="ftco-section">
        <div className="container">
          <div className="row">

              <div className="col-lg-7 blog-single">
                {page.message1()}

                {/* advantages of studying in that destination */}
                <h5 className="text-capitalize">Why Study In {page.name}?</h5>
                <ul className="text-lowercase">
                  {page.advantages.map(Attach)}
                </ul>

                {/* required documents */}
                <h5>Required Documents</h5>
                <ul className="text-lowercase">
                  {page.documentRequired.map(Attach)}
                </ul>

                {/* visa requirements */}
                {
                  page.visaIsRequired ?

                    <>
                      <h5>Visa Requirements</h5>
                      <ul className="text-lowercase">
                          {page.visaRequirements.map(Attach)}
                      </ul>
                    </>
                   :
                  null
                }

              </div>

              <div className="col-lg-5 sidebar pl-md-4">
                <img src={page.flyer} alt="flyer" className="w-100"></img>
                <img src={page.image} alt="flyer" className="w-100 my-3"></img>
              </div>
          </div>
        </div>

        <Progress />

<Form data={formData} />
      </section>
    </section>
  );
};

export default StudyDestination;
