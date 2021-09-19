import React, { useEffect, useState } from 'react';
import photo from '../../../images/fliers/lithuania1.jpeg';
import photo2 from '../../../images/fliers/turkey1.jpeg';
import Modal from 'react-bootstrap/Modal';
import preference from '../../../preference';
import Carousel from 'react-bootstrap/Carousel'

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
      {/* <img src={photo} alt="guinea" className="h-100 popup-img-gui" /> */}

      <Carousel fade slide={true} indicators={false} controls={true} >
        <Carousel.Item>
          <img
            className="h-100 popup-img-gui"
            src={photo}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="h-100 popup-img-gui"
            src={photo2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
     </Modal>
      }
    </>
  );
}

export default Pop;
