import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import Select from "../utils/FormComponents/Select";
import "./eventStyle.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";


function EventRegistrationModal({ event, closeModal, setCloseRegistrationForUser }) {
  // context for logged user
  const { token } = useContext(AuthContext);

  // state for users choose distance for event 
  const [distance, setDistance] = useState("");

  // handle inputs option change
  const handleChange = (e) => {
    setDistance(e.target.value);
  }

  // submit/register user for event (save user as reference in events model, and event with choosen distance as ref in users model)
  const handleEventRegistration = async () => {
    const eventId = event._id;
    const choosenDistance = distance;
    const userId = token;
    const response = await axios.post("http://localhost:4001/api/events/register", { eventId, choosenDistance, userId });
    setCloseRegistrationForUser(true);
    closeModal();
  }

  return ReactDOM.createPortal(
    <div className="event_modal">
      <div className="event_modal_close_X" onClick={() => closeModal()}>
        X
      </div>
      <div className="event_modal_content_conatiner">
        <div className="event_modal_form">

          <Select onChange={handleChange} fields={event.distance} label={"Pieejamās distances"} name="Distance" required />
          {distance ? <input type="submit" onClick={handleEventRegistration} value="Reģistrēties" /> : null}
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  )
}

export default EventRegistrationModal;