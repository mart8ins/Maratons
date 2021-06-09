import { useState, useContext, useEffect } from "react";
import RegistrationStatus from "../utils/RegistrationStatus";
import EventRegistrationModal from "./EventRegistrationModal";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { EventContext } from "../../context/EventContext";
import "./eventStyle.css";
import axios from "axios";

const storage = window.localStorage;

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

    // state for loged users event registrations array
    const [userEvents, setUserEvents] = useState([]);

    // context for logged user, token is user id in db
    const { token } = useContext(AuthContext);

    // current events id
    const { eventId } = props.match.params;

    // context for all events in db and local states for filtered event, filtered events distance array
    const { allEvents } = useContext(EventContext);
    const [filteredEvent, setfilteredEvent] = useState({}); // current event in browser
    const [distance, setDistance] = useState([]);


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
        if (token) {
            (async function getUserEvents() {
                const response = await axios.get(`http://localhost:4001/api/users/${token}`);
                setUserEvents(response.data.user.events)
            })();
        }
    }, [])


    /* ************************************************* */
    /* ************************************************* */
    // state to triger changes after user registers to event
    const [closeRegistrationForUser, setCloseRegistrationForUser] = useState(false);
    // return object if current logged user ir already registred to current event
    const userIsRegistredToEvent = (arr, ev) => {
        let isRegistred = arr.find((event) => {
            return event.event._id === ev;
        });
        return isRegistred;
    }
    // userAlreadyRegistred also used as boolean to follow if user ir registred to event, keep data after refresh
    const userAlreadyRegistred = userIsRegistredToEvent(userEvents, eventId);
    /* ************************************************* */
    /* ************************************************* */



    return <div className="event_details_container">
        {showModal ? <EventRegistrationModal event={filteredEvent} setCloseRegistrationForUser={setCloseRegistrationForUser} closeModal={openModal} /> : null}
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

                {filteredEvent.registrationOpen && token && !closeRegistrationForUser && !userAlreadyRegistred ? <button onClick={openModal} className="register_button">Reģistrēties skrējienam</button> : null}
                {closeRegistrationForUser || userAlreadyRegistred ? <div>
                    <button className="register_button_disabled">Reģistrēts</button>
                    <Link className="link_to_profile_registrations" to={`/profile/${token}`}>Apskatīt reģistrācijas</Link>
                </div> : null}


                {!token && filteredEvent.registrationOpen ? <p className="event_avaliable_closed_message">Lai reģistrētos skrējienam, lūgums autentificēties</p> : null}
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