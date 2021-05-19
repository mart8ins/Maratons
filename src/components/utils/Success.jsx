import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Success() {
    const query = useQuery();

    return <div className="success">
        <h4>Apsveicam, tu esi veiksmīgi reģistrējies skrējienam <span className="success_event">"{query.get("event")}"</span>. Tuvākajā laikā e-pastā saņemsi detlaizētu informāciju.</h4>
    </div>
}

export default Success;