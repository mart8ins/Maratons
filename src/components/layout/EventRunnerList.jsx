import Runner from "./Runner";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function EventRunnerList({ runners }) {
    // const runners = props.runners;
    const query = useQuery().get("event");

    const eventRunners = runners.filter((runner) => {
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


const mapStateToProps = (state, componentProps) => {
    // state - redux state
    // componentProps šīs pašas komponenters props, šādi var piekļūt params utt, izfiltrēt kautko no state
    return {
        runners: state.runners
    }
}

export default connect(mapStateToProps)(EventRunnerList);