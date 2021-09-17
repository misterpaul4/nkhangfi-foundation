import React from 'react';

const Alert = prop => {
  const { alertPropClassName, message } = prop.data;

  return(
  <div className={alertPropClassName} id="appStatus" role="alert">
    <span id="application-form-status-message">{message}</span>
  </div>
)
}

export default Alert;
