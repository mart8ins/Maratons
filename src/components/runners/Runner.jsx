import { Link } from "react-router-dom";
import { events } from "../../eventsSeedData";


function Runner({ runner, showTitle }) {
    const eventId = events.filter((event) => {
        let currentEvent = null;
        if (event.event === runner.event) {
            currentEvent = event;
        };
        return currentEvent;
    })
    return <div className="runner">
        <div className="runner_event_distance">
            {showTitle ? <p className="runner_event"><Link to={`/event/${eventId[0].id}`}>{runner.event}</Link></p> : null}
            <p>Distance {runner.distance}</p>
        </div>
        <div className="runner_name">
            <p>{runner.firstName} {runner.lastName}</p>
        </div>

    </div>
}

export default Runner;