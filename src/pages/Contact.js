import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {setActive, removeActive} from '../utils/activeLink';
import Hero from '../components/Hero/Others';
import Form from '../components/ContactForm';
import { contactForm } from '../utils/Forms';
import Newsletter from '../components/Newsletter';
import '../css/contact.css';

const Contact = () => {
  useEffect(() => {
    setActive('nav-contact');

    return () => {
      removeActive('nav-contact');
    };
  }, []);

  const heroContent = {
    name: "contact",
    bg: "nk-contact-bg",
    theme: "contact us",
    parent: "home",
  };

  const formData = {
    FORMSPARK_ACTION_URL: contactForm,
    formName: "Contact",
    formExtrasEduc: false,
  };

  return (
    <section>
      <Hero data={heroContent}/>

      <div>
        <div className="d-flex">

          <div className="contact-bg d-sm-block d-none"></div>

          <div className="contact-FORM container">

            <div className="row text-center mt-2 contact-wrap py-4">
              <h3>Reach Out To Us</h3>
              <p>Get in touch with us and speak directly with one of our representatives</p>
              <div className="dbox">

                <div className="text">
                  <p><span>head office:</span> Awae 0000 Yaoundé, Cameroon</p>
                </div>

                <div className="text">
                  <p><span>sierra leone office:</span> 28 Walpole street, proxy building, second floor, Sierra Leone</p>
                </div>

                <div className="text my-3">
                  <p><span>mail:</span><Link to={{pathname: "mailto: info@nkhangfitravel.com"}} target="_blank" rel="noopener noreferrer">info@nkhangfitravel.com</Link></p>
                </div>

                <div className="text">
                  <p><span>phone:</span> +23233313797, +905338245235</p>
                </div>

              </div>
            </div>

            <Form data={formData}/>

            <div className="social-media mt-5 container">
              <h3>Follow us here</h3>
              <p className="text-left">
              <Link to={{pathname: "https://www.facebook.com/Nkhangfitravelandbusinesscentre"}} target="_blank" rel="noopener noreferrer">Facebook
              </Link>

              <Link to={{pathname: "https://twitter.com/nkhangfi"}} className="mx-3" target="_blank" rel="noopener noreferrer">Twitter
              </Link>

              <Link to={{pathname: "https://www.instagram.com/nkhangfitravel/"}} target="_blank" rel="noopener noreferrer">Instagram
              </Link>
              </p>
            </div>
          </div>

        </div>
      </div>

      <Newsletter />
    </section>
  );
}

export default Contact;
