import Runner from "../runners/Runner";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { RunnersContext } from "../../context/RunnersContext";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function EventRunnerList() {
    const { allRunners } = useContext(RunnersContext);
    const query = useQuery().get("event");

    const eventRunners = allRunners.filter((runner) => {
        let runners = null;
        if (runner.event === query) {
            runners = runner;
        }
        return runners;
    })

    return <div className="event_runner_list_container">
        <h3>{query}</h3>
        {!eventRunners.length ? <p className="no_runners">Skrējienam reģistrāciju nav.</p> : null}
        {eventRunners.map((runner, index) => {
            return <Runner key={index} runner={runner} showTitle={false} />
        })}
    </div>
}

export default EventRunnerList;