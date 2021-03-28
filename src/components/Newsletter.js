import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

const Newsletter = () => {
  const [state, updateState] = useState({
    icon: 'fa fa-paper-plane',
    email: '',
  });

  const [show, setShow] = useState(false);

  const handleSubmitted = () => {
    updateState({
      email: "",
      icon: "fa fa-paper-plane"
    });

    setShow(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    updateState({
      ...state,
      icon: "spinner-border spinner-border-sm",
    });


    const form = e.target;
    axios({
      method: "post",
      url: "https://formspree.io/f/mjvjbljz",
      data: new FormData(form),
      headers: {
        'Accept': 'application/json'
      },
    }).then(r => {
      // succesful
      console.log('sent!!!');;
    }).catch(r => {
      console.log('errors', r);;
    });

    setShow(true);
  };

  // const submitNewsLetter = e => {
  //   e.preventDefault();
  // };

  const setEmail = e => {
    updateState({
      ...state,
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
                  <input type="email" className="form-control" name="email" placeholder="Enter email address" onChange={setEmail} value={state.email} />
                  <button className="btn-icon send-btn border-0" type="submit"><span className={state.icon} role="status"></span></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal show={show} onHide={handleSubmitted}>
      <Modal.Body>Woohoo, you have been subscribed! Ensure to check your spam folder just in case.</Modal.Body>
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
