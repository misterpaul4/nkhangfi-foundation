import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import '../css/form.css';

const FORMSPARK_ACTION_URL = "https://submit-form.com/6VkNeC0j";

const ContactForm = () => {
  // const {title, formID, embed} = props.data;

  const [show, setShow] = useState(false);


  const [message, updateMessage] = useState("");
  const [email, updateEmail] = useState("");
  const [phone, updatePhone] = useState("");
  const [name, updateName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [statusMessage, updateStatusMessage] = useState({
    messageHead: "",
    messageBody: "",
  })

  const formSuccess = {
    messageHead: "Delivered!!!",
    messageBody: `Hi ${name}, form have been successfully delivered. A confirmation emaill will be sent to ${email}. Ensure to check your spam folder just in case.`
  }

  const formFailure = {
    messageHead: "Not Delivered!!!",
    messageBody: `Please try again or send us an email directly at info@nkhangfitravel.com.`
  }


  const [icon, updateIcon] = useState('fa fa-paper-plane');

  const resetFormData = () => {
    updateName("");
    updatePhone("");
    updateMessage("");
    updateLastName("");
    updateEmail("");
  };

  const handleSubmitted = () => setShow(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    updateIcon("spinner-border spinner-border-sm");

    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        message,
        name,
        lastName,
        phone,
        email,
      }),
    }).then(() => {
      // succesful
      updateStatusMessage(formSuccess);
      setShow(true);
      resetFormData();
      updateIcon("fa fa-paper-plane");
    }).catch(Err => {
      // unsuccesful
      updateStatusMessage(formFailure);
      setShow(true);
      updateIcon("fa fa-paper-plane");
    });



  };

  return (
    <div className="container">
      <div className="text-center">
        <form id="contact" onSubmit={onSubmit}>
          <h3 className="mb-4">Form</h3>

          <div className="row">
            <fieldset className="col-md-6">
              <input value={name} onChange={(e) => updateName(e.target.value)} placeholder="First Name" name="firstname" id="firstname" type="text" required></input>
            </fieldset>

            <fieldset className="col-md-6">
              <input value={lastName} onChange={(e) => updateLastName(e.target.value)} placeholder="Last Name (Surname)" name="lastname" id="lastname" type="text" required></input>
            </fieldset>

            <fieldset className="col-md-6">
              <input value={email} onChange={(e) => updateEmail(e.target.value)} placeholder="Email Address" name="email" id="email" type="email" required></input>
            </fieldset>

            <fieldset className="col-md-6">
              <input value={phone} onChange={(e) => updatePhone(e.target.value)} placeholder="Phone Number" name="number" id="phone" type="tel"></input>
            </fieldset>

            <fieldset className="col-12">
              <textarea value={message} onChange={(e) => updateMessage(e.target.value)} placeholder="Type your Message Here...." name="message" id="message"></textarea>
            </fieldset>

            <fieldset className="col-3 text-left">
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">
                <span className={`submit-icon ${icon}`}></span>
              </button>
            </fieldset>

          </div>
        </form>
      </div>


      <Modal show={show} onHide={handleSubmitted}>
     <Modal.Header>
        <Modal.Title>{statusMessage.messageHead}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{statusMessage.messageBody}</Modal.Body>
      <Modal.Footer>
        <button variant="secondary" onClick={handleSubmitted} className="border-0 send-btn">
          Close
        </button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default ContactForm;
