import Runner from "../runners/Runner";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEventRunners } from "../../fetch/events";
import "./eventStyle.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function EventRunnerList(props) {
    const { eventId } = props.match.params;
    const [registredRunners, setRegistredRunners] = useState([])

    useEffect(() => {
        getEventRunners(eventId).then((response) => {
            setRegistredRunners(response.data)
        })
    }, [])

    const query = useQuery().get("event");

    return <div className="event_runner_list_container">
        <h3>{query} dalībnieku saraksts</h3>
        {!registredRunners.length ? <p className="no_runners">Skrējienam reģistrāciju nav.</p> : null}
        {registredRunners.map((runner, index) => {
            return <Runner key={index} runner={runner} showTitle={false} />
        })}
    </div>
}

export default EventRunnerList;