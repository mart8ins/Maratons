import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserEvents.css";
import { AuthContext } from "../../context/AuthContext";
import * as fetchUsers from "../../fetch/users";



function UserEvents() {
    const [userEvents, setUserEvents] = useState([]);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        fetchUsers.getUser(token).then((response) => {
            setUserEvents(response.data.user.events);
        });
    }, []);

    const renderEvents = () => {
        return userEvents.map((ev, i) => {
            console.log(ev)
            return <div key={i}>
                <Link to={`/event/${ev.event._id}`}>{ev.event.event} - {ev.distance}</Link>
            </div>
        })
    }

    return <div className="user_events_container">
        <p>Skrējienu reģistrācijas!</p>
        {userEvents && userEvents.length && <div className="user_events">
            {renderEvents()}
        </div>}
        {!userEvents.length && <div className="user_events">
            <p className="no_user_events">Nav aktuālu reģistrāciju skrējieniem!</p>
            <div className="no_user_events_to_events_link">
                <Link to="/all-events">Apskatīt skrējienus</Link>
            </div>
        </div>}

    </div>
}

export default UserEvents;