import RegistrationStatus from "../utils/RegistrationStatus";
import { Link } from "react-router-dom";
import "./eventStyle.css";

function EventCard({ event }) {
    let id = "/event/" + event._id;
    return (
        <div>
            <Link to={id}>
                <div className="event_card" style={{ backgroundImage: `url(${event.image})` }}>
                    <h4>{event.event}</h4>
                    <RegistrationStatus registrationOpen={event.registrationOpen} />
                    <p>{event.date}, {event.location}</p>
                </div>
            </Link>
        </div>
    )
}
export default EventCard;