import React from 'react';
import ReactDOM from 'react-dom';
import Form from "../utils/FormComponents/Form";

function Modal({ event, closeModal }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal_close_X" onClick={() => closeModal()}>
        X
      </div>
      <div className="modal_content_conatiner">
        <div className="modal_form">
          <Form event={event} closeModal={closeModal} />
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  )
}

export default Modal;