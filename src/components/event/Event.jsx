import { useState, useContext, useEffect } from "react";
import RegistrationStatus from "../utils/RegistrationStatus";
import EventRegistrationModal from "./EventRegistrationModal";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { EventContext } from "../../context/EventContext";
import "./eventStyle.css";

const storage = window.localStorage;

// render event km distance
function rednerKM(dist, index) {
    return <h3 key={index}>{dist}</h3>
}


function Event(props) {
    /* ************************************************* */
    /* ************************************************* */
    // state for show modal for registration for event
    const [showModal, setShowModal] = useState(false);
    // open/hide modal for registration
    function openModal() {
        showModal ? setShowModal(false) : setShowModal(true);
    }
    /* ************************************************* */
    /* ************************************************* */

    // context for logged user
    const { isLoged, loggedUser } = useContext(AuthContext);
    // to check if user is registred to current event
    const loggedUserEvents = loggedUser.events || [];

    // context for all events in db and local states for filtered event, filtered events distance array
    const { allEvents } = useContext(EventContext);
    const [filteredEvent, setfilteredEvent] = useState({});
    const [distance, setDistance] = useState([]);

    // current event id
    const { eventId } = props.match.params;

    /* ************************************************* */
    /* ************************************************* */
    // using localStorage to store filtered current event, data dont disapear after page refresh
    if (allEvents.length) {
        const e = allEvents.filter((event) => {
            return event._id === eventId;
        })
        storage.setItem("runningEvent", JSON.stringify(e[0]));
    }
    useEffect(() => {
        const filteredEventFromLS = JSON.parse(storage.getItem("runningEvent"));
        setfilteredEvent(filteredEventFromLS);
        setDistance(filteredEventFromLS.distance);
        storage.clear();
    }, [])
    /* ************************************************* */
    /* ************************************************* */
    // return true if current logged user ir already registred to current event
    const userIsRegistredToEvent = (arr, ev) => {
        for (let e of arr) {
            if (e.event === ev) {
                return true;
            } else {
                return false;
            }
        }
    }
    const userAlreadyRegistred = userIsRegistredToEvent(loggedUserEvents, filteredEvent.event);
    /* ************************************************* */
    /* ************************************************* */


    return <div className="event_details_container">
        {showModal ? <EventRegistrationModal event={filteredEvent} closeModal={openModal} /> : null}
        {/* {showAuthModal ? <AuthModal /> : null} */}
        <div className="event_details_image" style={{ backgroundImage: `url(${filteredEvent.image})` }}>
            <div className="event_details_date">
                {filteredEvent.date}
            </div>
            <div className="event_details_registration_closed">
                {!filteredEvent.registrationOpen ? <RegistrationStatus registrationOpen={filteredEvent.registrationOpen} /> : null}
            </div>
        </div>
        <div className="event_details">
            <div className="event_location">
                <h2>{filteredEvent.event}</h2>
                <h3>{filteredEvent.location}</h3>
                <div className="distance_options">
                    <p>Pieejamās distances</p>
                    {distance.map(rednerKM)}
                </div>

                {filteredEvent.registrationOpen && isLoged && !userAlreadyRegistred ? <button onClick={openModal} className="register_button">Reģistrēties skrējienam</button> : null}
                {userAlreadyRegistred ? <button className="register_button_disabled">Skrējienam jau esiet reģistrēts</button> : null}


                {!isLoged && filteredEvent.registrationOpen ? <p className="event_avaliable_closed_message">Lai reģistrētos skrējienam, lūgums autorizēties</p> : null}
                {!filteredEvent.registrationOpen ? <p className="event_avaliable_closed_message">Šim skrējienam reģistrācija vēl nav atvērta vai jau beigusies</p> : null}
            </div>
            <div className="event_description">
                <p>{filteredEvent.description}</p>
                <button><Link to={`/event/${eventId}/list?event=${filteredEvent.event}`}>Dalībnieku saraksts</Link></button>
            </div>
            {/* <div className="map" style={{ backgroundImage: "url(/images/map.jpg)" }}></div> */}
            <img alt="mapbox location event Ilguciems" className="map" src={filteredEvent.map} />
        </div>
    </div>
}

export default Event;