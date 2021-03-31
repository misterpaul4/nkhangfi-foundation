import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
// import axios from "axios";

const Newsletter = () => {
  const [preMailState, updatePreMailState] = useState({
    icon: 'fa fa-paper-plane',
    email: '',
  });

  const [postMailState, updatePostMailState] = useState({
    messageHead: 'Delivered!!!',
    messageBody: 'Woohoo!, you have been subscribed. Ensure to check your spam folder just in case.'
  })

  const [show, setShow] = useState(false);

  const handleSubmitted = () => {
    let em = preMailState.email;

    if (postMailState.messageHead === 'Delivered!!!') { em = ''}

    updatePreMailState({
      icon: 'fa fa-paper-plane',
      email: em,
    });

    setShow(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    updatePreMailState({
      ...preMailState,
      icon: "spinner-border spinner-border-sm",
    });

    const form = e.target;
    const XHR = new XMLHttpRequest();
    const FD = new FormData(form);

    XHR.open('POST', 'https://formspree.io/f/mjvjbljz');
    XHR.setRequestHeader('Accept', 'application/json');
    XHR.send(FD);

    XHR.addEventListener('load', () => {
      setShow(true);
    });

    XHR.addEventListener('error', () => {
      updatePostMailState({
        messageHead: 'Oooops!',
        messageBody: 'Please try again or refresh your browser then try again.',
      });

      setShow(true);
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
              <h2 className="mb-0">Newsletter - Stay tune and get the latest update</h2>
              <p>Be the first to find out the latest updates on events and social related programs</p>
            </div>
            <div className="col-md-5 border-left d-flex align-items-center">
              <form action="#" className="subscribe-form" onSubmit={handleSubmit}>
                <div className="form-group d-flex align-items-center">
                  <input type="email" className="form-control" name="email" placeholder="Enter email address" onChange={setEmail} value={preMailState.email} />
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
