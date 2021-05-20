import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthModal from "../auth/AuthModal";

import { AuthContext } from "../../context/AuthContext";
import "./Header.css";

const activeLinkStyle = {
    color: "white",
    backgroundColor: "black",
    boxShadow: "2px 2px 2px white"
}

function Header() {
    // main context about users auth status
    const authContext = useContext(AuthContext);
    const { isLoged, setIsLoged } = authContext;
    const logIn = () => setIsLoged(true);
    const logOut = () => setIsLoged(false);

    // if True then user choose login, False - user choose register
    const [logingOption, setlogingOption] = useState(false);

    // state for showing auth modal, functions to open model with needed form - register or login
    const [authModal, setAuthModal] = useState(false);
    const openAuthModalForRegister = () => {
        setAuthModal(true);
        setlogingOption(false);
    };
    const openAuthModalForLogin = () => {
        setAuthModal(true);
        setlogingOption(true);
    };
    const closeAuthModal = () => setAuthModal(false);

    const changeAuthOptionInOpenModal = (option) => {
        setlogingOption(!option);
    }

    return (
        <div className="header">
            <div className="header_left center"><p><Link to="/">Izskrien Rīgu!</Link></p></div>
            <div className="header_right center">
                <nav>
                    {authModal && <AuthModal logingOption={logingOption} changeAuthOptionInOpenModal={changeAuthOptionInOpenModal} closeAuthModal={closeAuthModal} />}

                    <NavLink to="/all-events" activeStyle={activeLinkStyle}>Skrējieni</NavLink>
                    {isLoged && <NavLink activeStyle={activeLinkStyle} to="/profile">Profils</NavLink>}

                    {!isLoged ?
                        <React.Fragment>
                            <Link onClick={openAuthModalForRegister}>Reģistrēties</Link>
                            <Link onClick={openAuthModalForLogin}>Pievienoties</Link>
                        </React.Fragment>
                        :
                        null
                    }
                    {isLoged && <Link to="/logout" onClick={logOut}>Iziet</Link>}
                </nav>
            </div>
        </div>
    )
}

export default Header;