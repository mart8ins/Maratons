import Runner from "./Runner";
import { useContext } from "react";
import { RunnersContext } from "../../context/RunnersContext";

function RunnersList() {
    const { allRunners } = useContext(RunnersContext);
    return <div className="runner_list_container">
        {allRunners.map((runner, index) => {
            return <Runner key={index} runner={runner} showTitle={true} />
        })}

    </div>
}


export default RunnersList;