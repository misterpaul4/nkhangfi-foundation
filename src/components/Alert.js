import React from 'react';

const Alert = () => {

  return(
  <div class="alert alert-warning position-fixed alert-dismissible fade show py-2" id="appStatus" role="alert">
    <span id="application-form-status-message">Amet pariatur esse dolore cillum dolor commodo.</span>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
)
}

export default Alert;
