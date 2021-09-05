import React from 'react';

const Alert = prop => {

  return(
  <div className="alert position-fixed alert-dismissible fade py-2" id="appStatus" role="alert">
    <span id="application-form-status-message">Amet pariatur esse dolore cillum dolor commodo.</span>
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
)
}

export default Alert;
