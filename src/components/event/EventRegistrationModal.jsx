import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Select from "../utils/FormComponents/Select";
import "./eventStyle.css";


function EventRegistrationModal({ event, closeModal }) {

  const [distance, setDistance] = useState("");
  const handleChange = (e) => {
    setDistance(e.target.value);
  }


  return ReactDOM.createPortal(
    <div className="event_modal">
      <div className="event_modal_close_X" onClick={() => closeModal()}>
        X
      </div>
      <div className="event_modal_content_conatiner">
        <div className="event_modal_form">
          <Select onChange={handleChange} fields={event.distance} label={"Pieejamās distances"} name="Distance" required />
          <button>Reģistrēties</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  )
}

export default EventRegistrationModal;