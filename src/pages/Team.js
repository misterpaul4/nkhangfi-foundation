import React, { useEffect } from 'react';
import Hero from '../components/Hero/Others';
import { Link } from 'react-router-dom';
import {setActive, removeActive} from '../utils/activeLink';
import staffs from '../utils/teams';
import Newsletter from '../components/Newsletter';
import { contactForm } from '../utils/Forms';
import Form from '../components/ContactForm';
import Progress from '../components/Progress';

const Team = () => {
  useEffect(() => {
    setActive('nav-team');
    window.scrollTo(-1, 0);

    return () => {
      removeActive('nav-team')
    };
  }, []);

  const heroContent = {
    name: "team",
    bg: "nk-team-bg",
    theme: "our team",
    parent: "home",
  };

  const formData = {
    FORMSPARK_ACTION_URL: contactForm,
    formName: "contact",
    formExtrasEduc: false,
  };

  const Attach = staff => (
    <div className="col-md-6 col-lg-3" key={staff.name}>
    <div className="staff">
      <div className="img" style={{backgroundImage: `url(${staff.image})`}}>
        <ul className="ftco-social">
          <li><Link to={{pathname: staff.facebook}} target="_blank" rel="noopener noreferrer"><span className="fab fa-facebook-f"></span></Link></li>
          <li><Link to={{pathname: staff.instagram}} target="_blank" rel="noopener noreferrer"><span className="fab fa-instagram"></span></Link></li>
          <li><Link to={{pathname: `mailto: ${staff.email}`}} target="_blank" rel="noopener noreferrer"><span className="fa fa-envelope"></span></Link></li>
        </ul>
      </div>
        <div className="text">
          <h3 className="text-capitalize">{staff.name}</h3>
          <span className="position">{staff.title}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <Hero data={heroContent}/>

      <section className="ftco-section">
      <div className="container">
        <div className="row">
          {staffs.map(Attach)}
        </div>
      </div>
    </section>

    <Progress />
    <Newsletter />
    <Form data={formData}/>
    </section>
  );
}

export default Team;
