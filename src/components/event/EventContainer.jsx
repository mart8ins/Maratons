import { useContext, useEffect } from "react";
import EventCard from "./EventCard";
import { EventContext } from "../../context/EventContext";
import "./eventStyle.css";
import axios from "axios";




function renderEvents(event) {
    return <EventCard key={event._id} event={event} />
}

function EventContainer() {
    let { allEvents, setAllEvents } = useContext(EventContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:4001/api/events");
                setAllEvents(response.data);
            } catch (err) {
                console.log(err, "Error fetching Event data");
            }
        }
        fetchData();
    });

    return (
        <div className="event_container">
            {!allEvents.length ? "Loading" : allEvents.map(renderEvents)}
        </div>
    )
}

export default EventContainer;