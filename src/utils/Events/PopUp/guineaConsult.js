import React, { useEffect, useState } from 'react';
import photo from '../../../images/events/nkhangfi_guinea_flier.png';
import Modal from 'react-bootstrap/Modal';
import preference from '../../../preference';


const Pop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), preference.popUpDelaytime * 1000)
  }, []);

  const handleClose = () => setIsVisible(false);

  return (
    <>
      {
    <Modal show={isVisible} onHide={handleClose} className="popup-modal" backdrop="static">
      <Modal.Header closeButton className="popup-closeBtn">
      </Modal.Header>
      <img src={photo} alt="guinea" className="h-100 popup-img-gui" />
     </Modal>
      }
    </>
  );
}

export default Pop;
