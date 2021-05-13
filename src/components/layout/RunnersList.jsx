import { connect } from "react-redux";
import Runner from "./Runner";

function RunnersList({ runners }) {
    return <div className="runner_list_container">
        {runners.map((runner, index) => {
            return <Runner key={index} runner={runner} showTitle={true} />
        })}

    </div>
}

const mapStateToProps = (state) => {
    return {
        runners: state.runners
    }
}

export default connect(mapStateToProps)(RunnersList);