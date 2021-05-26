import Runner from "../runners/Runner";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { EventContext } from "../../context/EventContext";
import "./eventStyle.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function EventRunnerList() {
    const { allEvents } = useContext(EventContext);
    const query = useQuery().get("event");

    const filteredEvent = allEvents.filter(event => event.event == query);
    const registredRunners = filteredEvent[0].registredRunners;
    console.log(registredRunners)


    return <div className="event_runner_list_container">
        <h3>{query} dalībnieku saraksts</h3>
        {!registredRunners.length ? <p className="no_runners">Skrējienam reģistrāciju nav.</p> : null}
        {registredRunners.map((runner, index) => {
            return <Runner key={index} runner={runner} showTitle={false} />
        })}
    </div>
}

export default EventRunnerList;