import React from 'react';

const Alert = prop => {
  const { alertPropClass, message } = prop.data;

  return(
  <div className={alertPropClass} id="appStatus" role="alert">
    <span id="application-form-status-message">{message}</span>
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
)
}

export default Alert;
