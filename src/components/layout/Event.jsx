import { events } from "../../events";
import RegistrationStatus from "../utils/RegistrationStatus";
import Modal from "./Modal";
import { useState } from "react";



function Event(props) {
    // state for show modal for registration for event
    const [showModal, setShowModal] = useState(false);

    // current event id -> event data from array
    const { eventId } = props.match.params;
    const event = events.filter((event) => {
        return event.id == eventId;
    })
    const eventDetails = event[0];

    // render event km distance
    function rednerKM(dist, index) {
        return <h3 key={index}>{dist}</h3>
    }

    // open/hide modal for registration
    function openModal() {
        showModal ? setShowModal(false) : setShowModal(true)

    }

    return <div className="event_details_container">
        {showModal ? <Modal event={eventDetails} closeModal={openModal} /> : null}
        <div className="event_details_image" style={{ backgroundImage: `url(${eventDetails.image})` }}>
            <div className="event_details_date">
                {eventDetails.date}
            </div>
            <div className="event_details_registration_closed">
                {!eventDetails.registrationOpen ? <RegistrationStatus registrationOpen={eventDetails.registrationOpen} /> : null}
            </div>
        </div>
        <div className="event_details">
            <div className="event_location">
                <h2>{eventDetails.event}</h2>
                <h3>{eventDetails.location}</h3>
                <div className="distance_options">
                    <p>Pieejamās distances</p>
                    {eventDetails.distance.map(rednerKM)}
                </div>
                {eventDetails.registrationOpen ? <button onClick={openModal} className="register_button">Reģistrēties</button> : null}

            </div>
            <div className="event_description">
                {eventDetails.description}
            </div>
            <div className="map" style={{ backgroundImage: "url(/images/map.jpg)" }}></div>
        </div>
    </div>
}



export default Event;