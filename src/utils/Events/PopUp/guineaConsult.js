import React, { useEffect, useState } from 'react';
import photo from '../../../images/events/guinea_consult.jpeg';
import Modal from 'react-bootstrap/Modal';


const Pop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 3000)
  }, []);

  const handleClose = () => setIsVisible(false);

  return (
    <>
      {
    <Modal show={isVisible} onHide={handleClose} className="popup-modal">
      <Modal.Header closeButton className="popup-closeBtn">
      </Modal.Header>
      <img src={photo} alt="guinea" className="h-100 popup-img-gui" />
     </Modal>
      }
    </>
  );
}

export default Pop;
