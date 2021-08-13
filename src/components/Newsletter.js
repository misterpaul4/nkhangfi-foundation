import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { newsletterUrl } from '../utils/Forms';

const Newsletter = () => {
  const [preMailState, updatePreMailState] = useState({
    icon: 'fa fa-paper-plane',
    email: '',
  });

  const [postMailState, updatePostMailState] = useState({
    messageHead: " ",
    messageBody: " ",
  });

  const [show, setShow] = useState(false);

  const handleSubmitted = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: preMailState.email
    }

    updatePreMailState({
      ...preMailState,
      icon: "spinner-border spinner-border-sm",
    });

    await fetch(newsletterUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then(() => {
      // success
      updatePostMailState({
        messageHead: 'Delivered!!!',
        messageBody: `You have been subscribed. A confirmation email will be sent to ${preMailState.email}. Ensure to check your spam folder just in case.`,
      });

      setShow(true);
      updatePreMailState({
        icon: "fa fa-paper-plane",
        email: "",
      });
    }).catch(Err => {
      // unsuccesful
      updatePostMailState({
        messageHead: 'Not Subscribed!!!',
        messageBody: `Please try again or send us an email directly at info@nkhangfifoundation.com.`,
      });

      setShow(true);
      updatePreMailState({
        ...preMailState,
        icon: "fa fa-paper-plane",
      });
    });
  };

  const setEmail = e => {
    updatePreMailState({
      ...preMailState,
      email: e.target.value,
    });
  };

  return (
    <section className="ftco-intro py-5 bg-primary">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-10">
          <div className="row g-lg-5">
            <div className="col-md-7">
              <h2 className="mb-0">Newsletter - Stay tuned and get the latest update</h2>
              <p>Be the first to find out the latest updates on events and social related programs</p>
            </div>
            <div className="col-md-5 border-left d-flex align-items-center">
              <form className="subscribe-form" onSubmit={handleSubmit}>
                <div className="form-group d-flex align-items-center">
                  <input type="email" className="form-control" name="email" placeholder="Enter email address" onChange={setEmail} value={preMailState.email} required />
                  <button className="btn-icon send-btn border-0" type="submit"><span className={preMailState.icon} role="status"></span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal show={show} onHide={handleSubmitted}>
     <Modal.Header>
        <Modal.Title>{postMailState.messageHead}</Modal.Title>
      </Modal.Header>

      <Modal.Body>{postMailState.messageBody}</Modal.Body>
      <Modal.Footer>
        <button variant="secondary" onClick={handleSubmitted} className="border-0 send-btn">
          Close
        </button>
      </Modal.Footer>
    </Modal>
    </section>
  );
};

export default Newsletter;
