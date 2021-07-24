import React, { useEffect, useState } from 'react';
import photo from '../../../images/events/guinea_consult.jpeg';

const Pop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [popUpState, togglePopup] = useState(true);

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  const toggleReveal = () => {
    const element = document.querySelector('.popup-img-gui');
    element.classList.toggle("hide-popup");
    togglePopup(!popUpState);
  };

  return (
    <>
      {
        isVisible &&
        <div className="h-100 d-flex">
          <button onClick={() => toggleReveal()} className= {popUpState ? "h-100 popup-toggle-btn bg-danger text-light" : "h-100 popup-toggle-btn"}>{popUpState ? <i class="fas fa-angle-left"></i> : <i class="fas fa-angle-right"></i>}</button>
          <img src={photo} alt="guinea" className="h-100 popup-img-gui" />
        </div>
      }
    </>
  );
}

export default Pop;
