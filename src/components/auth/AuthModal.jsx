import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import Input from "../utils/FormComponents/Input";
import Select from "../utils/FormComponents/Select";
import { AuthContext } from "../../context/AuthContext";
import "./authModal.css";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";

const genders = ["Vīrietis", "Sieviete"];

const AuthModal = ({ closeAuthModal, logingOption, changeAuthOptionInOpenModal }) => {
    const history = useHistory();


    // APP context for if users is logged in
    const { isLoged, setIsLoged } = useContext(AuthContext);

    // login message
    const [authMessage, setAuthMessage] = useState(undefined);

    // state for auth data
    const [authInputData, setAuthInputData] = useState({});

    // handle auth forms input data
    const changeHandler = (e) => {
        setAuthInputData({
            ...authInputData,
            [e.target.name]: e.target.value
        })
    };

    // handle users submited data in auth
    const submitHandler = (e) => {
        e.preventDefault();

        // handle succesful login or register
        // returns boolean and message
        let loginSuccessful = logingOption ? Login(authInputData) : Register(authInputData);
        let { authSuccessful, authMessage } = loginSuccessful;
        if (authSuccessful) {
            setIsLoged(true);
            history.push("/all-events");
            closeAuthModal();
        } else {
            setAuthMessage(authMessage);
        }
    }


    const authContent = (
        <div className="auth_modal">
            <div onClick={closeAuthModal} className="auth_modal_close_X">
                X
            </div>
            <div className="auth_modal_content_conatiner">
                <form>
                    <fieldset className="auth_modal_form">
                        <legend>{logingOption ? "Pievienoties" : "Reģistrēties"}</legend>
                        {!logingOption ?
                            <React.Fragment>
                                <Input onChange={changeHandler} type="text" name="firstName" placeholder="Vārds" id="firstName" isRequired={true} />
                                <Input onChange={changeHandler} type="text" name="lastName" placeholder="Uzvārds" id="lastName" isRequired={true} />
                                <Input onChange={changeHandler} type="text" name="age" placeholder="Vecums" id="age" isRequired={true} />
                                <Select onChange={changeHandler} fields={genders} label="Dzimums" isRequired={true} name="gender" />
                                <Input onChange={changeHandler} type="text" name="phone" placeholder="telefons" id="phone" isRequired={true} />

                            </React.Fragment> : null}
                        <Input onChange={changeHandler} type="email" name="email" placeholder="e-pasts" id="email" isRequired={true} />
                        <Input onChange={changeHandler} type="password" name="password" placeholder="parole" id="password" isRequired={true} />

                        <p className="unsuccessfulAuthMsg">{authMessage}</p>
                        <button onClick={submitHandler} className="auth_btn">Skriet!!!</button>


                        {!logingOption ? <button className="change_Auth_Option_Btn" onClick={() => {
                            changeAuthOptionInOpenModal(logingOption);
                            setAuthMessage(undefined);
                        }}>Tomēr jau esi reģistrēts?...</button>
                            :
                            <button className="change_Auth_Option_Btn" onClick={() => {
                                changeAuthOptionInOpenModal(logingOption);
                                setAuthMessage(undefined);
                            }}>Neesi vēl reģistrējies?...</button>
                        }
                    </fieldset>
                </form>

            </div>
        </div>
    );



    return ReactDOM.createPortal(
        authContent,
        document.getElementById("authModal")
    );
}

export default AuthModal;