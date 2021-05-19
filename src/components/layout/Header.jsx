import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="header_left"><p className="title"><Link to="/">Izskrien Rīgu!</Link></p></div>
            <div className="header_right">
                <Link to="/list">Dalībnieku reģistrācijas</Link>
                <Link to="/list">Reģistrēties</Link>
                <Link to="/list">Pievienoties</Link>
            </div>
        </div>
    )
}

export default Header;