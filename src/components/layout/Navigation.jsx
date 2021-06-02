import React, { useState, useContext } from "react";
import AuthModal from "../auth/AuthModal";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import { AuthContext } from "../../context/AuthContext";

const activeLinkStyle = {
    color: "white",
    backgroundColor: "black",
    boxShadow: "2px 2px 2px white"
}


const Navigation = () => {
    const { isLoged, setIsLoged } = useContext(AuthContext);

    /* **************************************************
    ->>>> HANDLING AUTH MODAL AND OPTIONS TO LOGIN OR REGISTER
    ****************************************************** */
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
    /* **************************************************
   HANDLING AUTH MODAL AND OPTIONS TO LOGIN OR REGISTER <<<<-
   ****************************************************** */

    const logout = () => {
        setIsLoged(false);
    }


    return <div>
        <nav>
            {authModal && <AuthModal
                logingOption={logingOption}
                changeAuthOptionInOpenModal={changeAuthOptionInOpenModal}
                closeAuthModal={closeAuthModal}
            />}

            <NavLink to="/all-events" activeStyle={activeLinkStyle}>Skrējieni</NavLink>
            {isLoged && <NavLink activeStyle={activeLinkStyle} to="/profile"><span className="loggedUserName">Lietotāja profils</span> Profils</NavLink>}


            {!isLoged && <React.Fragment>
                <Link to="/"
                    onClick={openAuthModalForRegister}
                    className="authbtn">Reģistrēties
                            </Link>
                <Link to="/"
                    onClick={openAuthModalForLogin}
                    className="authbtn">Pievienoties
                            </Link>
            </React.Fragment>}


            {isLoged && <Link to="/" onClick={logout}>Iziet</Link>}

        </nav>
    </div>
}

export default Navigation;
