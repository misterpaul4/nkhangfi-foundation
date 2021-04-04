import React from 'react';
import '../css/form.css';

const ContactForm = () => {
  // const {name} = props.data;

  return (
    <div className="container">
      <div className="text-center">
        <form id="contact">
          <h3 className="mb-4">Form</h3>

          <div className="row">
            <fieldset className="col-md-6">
              <input placeholder="First Name" name="firstname" id="firstname" type="text" required></input>
            </fieldset>

            <fieldset className="col-md-6">
              <input placeholder="Last Name (Surname)" name="lastname" id="lastname" type="text" required></input>
            </fieldset>

            <fieldset className="col-md-6">
              <input placeholder="Email Address" name="email" id="email" type="email" required></input>
            </fieldset>

            <fieldset className="col-md-6">
              <input placeholder="Phone Number" name="number" id="phone" type="tel"></input>
            </fieldset>

            <fieldset className="col-12">
              <textarea placeholder="Type your Message Here...." name="message" id="message"></textarea>
            </fieldset>

            <fieldset className="col-3 text-left">
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">
                <span className="fas fa-paper-plane submit-icon"></span>
              </button>
            </fieldset>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
