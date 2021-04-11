import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import countries from '../utils/countries';
import '../css/form.css';

const ContactForm = props => {
  const { formName, FORMSPARK_ACTION_URL, formExtrasEduc, studyDestinationProvided } = props.data;

  const [message, updateMessage] = useState("");
  const [email, updateEmail] = useState("");
  const [phone, updatePhone] = useState("");
  const [name, updateName] = useState("");
  const [lastName, updateLastName] = useState("");
  const [statusMessage, updateStatusMessage] = useState({
    messageHead: "",
    messageBody: "",
  });
  const [age, updateAge] = useState("unselected");
  const [gender, updateGender] = useState("unselected");
  const [program, updateProgram] = useState("unselected");
  const [social, updateSocial] = useState("unselected");
  const [course, updateCourse] = useState("");
  const [country, updateCountry] = useState("");
  const [nationality, updateNationality] = useState("");
  const [fatherName, updateFatherName] = useState("");

  const AttachCountries = cts => (
    <option value={cts} key={cts}></option>
  );

  const AttachEducExtras = () => (
    <>
      <fieldset className="col-md-6">
        <input type="text" placeholder="Father's Name" name="father's name" required onChange={(e) => updateFatherName(e.target.value)} value={fatherName}></input>
      </fieldset>

      <fieldset className="col-md-6">
        <input className="form-control" type="text" list="datalistOptions" name="nationality" id="country" placeholder="Nationality" onChange={(e) => updateNationality(e.target.value)} value={nationality} required></input>
        <datalist id="datalistOptions">
          {countries.map(AttachCountries)}
        </datalist>
      </fieldset>

      <fieldset className="col-md-6">
        <input className="form-control" type="text" list="datalistOptions" name="country" id="country" placeholder="Country of Residence" onChange={(e) => updateCountry(e.target.value)} value={country} required></input>
        <datalist id="datalistOptions">
          {countries.map(AttachCountries)}
        </datalist>
      </fieldset>

      <fieldset className="col-md-6">
        <input type="text" placeholder="What do you intend to study (e.g business administration)" name="course of study" id="course" required onChange={(e) => updateCourse(e.target.value)} value={course}></input>
      </fieldset>

    <fieldset className="col-md-12 text-left">
      <div>
        <select name="age range" id="age" className="m-1" onChange={e => updateAge(e.target.value)} value={age} required>
          <option value="unselected" disabled>age</option>
          <option value="15-25">15 - 25</option>
          <option value="25-35">25 - 35</option>
          <option value="35-50">35 - 45</option>
        </select>

        <select name="gender" id="gender" className="m-1" onChange={e => updateGender(e.target.value)} value={gender} required>
          <option value="unselected" disabled>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select name="program" id="program" className="m-1" onChange={e => updateProgram(e.target.value)} value={program} required>
          <option value="unselected" disabled>Degree of Interest</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="postgraduate">Post-Graduate</option>
          <option value="associate">Associate</option>
        </select>

        <select name="how did you hear about us" id="social" onChange={e => updateSocial(e.target.value)} value={social} className="m-1">
          <option value="unselected" disabled>How did you hear about us?</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
          <option value="flyer">Flyer</option>
          <option value="banner">Banner</option>
          <option value="friends or relatives">From friends or relatives</option>
        </select>
      </div>
    </fieldset>
    </>
  );

  const [show, setShow] = useState(false);

  const formSuccess = {
    messageHead: "Delivered!!!",
    messageBody: `Hi ${name}, form have been successfully delivered. A confirmation email will be sent to ${email}. Ensure to check your spam folder just in case.`
  }

  const formFailure = {
    messageHead: "Not Delivered!!!",
    messageBody: `Please try again or send us an email directly at info@nkhangfitravel.com.`
  }


  const [icon, updateIcon] = useState('fa fa-paper-plane');

  const resetFormData = () => {
    updateName(" ");
    updatePhone(" ") ;
    updateMessage(" ");
    updateLastName(" ");
    updateEmail(" ");
    if (formExtrasEduc) {
      updateAge('unselected');
      updateGender('unselected');
      updateProgram('unselected');
      updateSocial('unselected');
      updateCourse(" ");
      updateCountry(" ");
    }
  };

  const plainForm = { name, lastName, phone, email, message };

  const formFilled = () => {
    const formObjs = {...plainForm, age, gender, program, social, course, nationality, country, fatherName };

    if (studyDestinationProvided !== undefined) {
      return {
        StudyDestination: studyDestinationProvided,
        ...formObjs,
      }
    }

    else if (formExtrasEduc) {
      return formObjs;
    }

    else {
      return plainForm;
    }
  }

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
      body: JSON.stringify(formFilled()),
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
          <h3 className="mb-4">{formName} Form</h3>

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

            { formExtrasEduc ? AttachEducExtras() : null }

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
