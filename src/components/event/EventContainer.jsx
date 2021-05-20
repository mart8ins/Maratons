import { useContext } from "react";
import EventCard from "./EventCard";
import { EventContext } from "../../context/EventContext";
import "./style.css";

function renderEvents(event) {
    return <EventCard key={event.id} event={event} />
}

function EventContainer() {
    let eventContext = useContext(EventContext);
    const { allEvents, setAllEvents } = eventContext;

    return (
        <div className="event_container">
            {allEvents.map(renderEvents)}
        </div>
    )
}

export default EventContainer;