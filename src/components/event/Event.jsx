import RegistrationStatus from "../utils/RegistrationStatus";
import EventRegistrationModal from "./EventRegistrationModal";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { events } from "../../eventsSeedData";
import "./eventStyle.css";
import { AuthContext } from "../../context/AuthContext";



function Event(props) {
    const { isLoged } = useContext(AuthContext);

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
        showModal ? setShowModal(false) : setShowModal(true);
    }

    return <div className="event_details_container">
        {showModal ? <EventRegistrationModal event={eventDetails} closeModal={openModal} /> : null}
        {/* {showAuthModal ? <AuthModal /> : null} */}
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
                {eventDetails.registrationOpen && isLoged ? <button onClick={openModal} className={"register_button"}>Reģistrēties skrējienam</button> : null}
                {!isLoged && eventDetails.registrationOpen ? <p className="event_avaliable_closed_message">Lai reģistrētos skrējienam, lūgums autorizēties</p> : null}
                {!eventDetails.registrationOpen ? <p className="event_avaliable_closed_message">Šim skrējienam reģistrācija vēl nav atvērta vai jau beigusies</p> : null}
            </div>
            <div className="event_description">
                <p>{eventDetails.description}</p>
                <button><Link to={`/event/${eventId}/list?event=${eventDetails.event}`}>Dalībnieku saraksts</Link></button>
            </div>
            {/* <div className="map" style={{ backgroundImage: "url(/images/map.jpg)" }}></div> */}
            <img alt="mapbox location event Ilguciems" className="map" src={eventDetails.map} />
        </div>
    </div>
}

export default Event;