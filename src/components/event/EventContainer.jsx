import EventCard from "./EventCard";
import { events } from "../../eventsSeedData";

function renderEvents(event) {
    return <EventCard key={event.id} event={event} />
}

function EventContainer() {
    return (
        <div className="event_container">
            {events.map(renderEvents)}
        </div>
    )
}

export default EventContainer;