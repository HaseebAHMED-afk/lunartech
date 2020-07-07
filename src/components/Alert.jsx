import React from 'react';

function Alert(){
    return <div className="alert alert-danger alert-dismissible fade show" role="alert">
    Even in the current <strong>Covid-19</strong> Crisis, Our team is 100% active. You'll get no delays from us.
    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
}

export default Alert;