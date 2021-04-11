import React, { useEffect } from 'react';
import Hero from '../components/Hero/Others';
import { useLocation } from 'react-router-dom';
import {setActive, removeActive} from '../utils/activeLink';
import destinations from '../utils/Study';
import Form from '../components/ContactForm';
import { studyAbroadFormUrl } from '../utils/Forms';
import Progress from '../components/Progress';

const StudyDestination = () => {
  useEffect(() => {
    setActive('nav-study');
    window.scrollTo(-1, 0);

    return () => {
      removeActive('nav-study')
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

  const Attach = em => <li>{em}</li>;

  const formData = {
    FORMSPARK_ACTION_URL: studyAbroadFormUrl,
    formName: `${page.name} study application`,
    formExtrasEduc: true,
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
                <ul>
                  {page.advantages.map(Attach)}
                </ul>

                {/* visa requirements */}
                {
                  page.visaIsRequired ?

                    <>
                      <h5>Visa Requirements</h5>
                      <ul>
                          {page.visaRequirements.map(Attach)}
                      </ul>
                    </>
                   :
                  null
                }

                {/* tuition */}
                <h5>Tuition</h5>
                <span>Minimum tuition fee <strong className="text-danger">{page.tuition}</strong></span>

              </div>

              <div className="col-lg-5 sidebar pl-md-4">
                <img src={page.flyer} alt="flyer" className="w-100 mb-2"></img>
                <img src={page.image} alt="flyer" className="w-100"></img>
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
