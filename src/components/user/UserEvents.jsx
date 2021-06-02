import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./UserEvents.css";
import { AuthContext } from "../../context/AuthContext";



function UserEvents() {
    const events = [];

    const renderEvents = () => {
        return events?.map((ev, i) => {
            return <Link key={i} to="/">{ev.event} - {ev.distance}</Link>
        })
    }

    return <div className="user_events_container">
        <p>Skrējienu reģistrācijas</p>
        {events && events.length && <div className="user_events">
            {renderEvents()}
        </div>}
        {!events && <div className="user_events">
            <p className="no_user_events">Nav aktuālu reģistrāciju skrējieniem!</p>
            <div className="no_user_events_to_events_link">
                <Link to="/all-events">Apskatīt skrējienus</Link>
            </div>
        </div>}

    </div>
}

export default UserEvents;