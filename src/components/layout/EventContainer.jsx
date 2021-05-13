import EventCard from "./EventCard";
import { connect } from "react-redux";

function renderEvents(event) {
    return <EventCard key={event.id} event={event} />
}

function EventContainer({ events }) {
    return (
        <div className="event_container">
            {events.map(renderEvents)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}
export default connect(mapStateToProps)(EventContainer);