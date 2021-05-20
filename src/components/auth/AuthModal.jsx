import React, { useState } from "react";
import ReactDOM from "react-dom";
import Input from "../utils/FormComponents/Input";
import Select from "../utils/FormComponents/Select";
import "./AuthModal.css";

const genders = ["Vīrietis", "Sieviete"];

const AuthModal = ({ closeAuthModal, logingOption, changeAuthOptionInOpenModal }) => {
    console.log(logingOption)



    const authContent = (
        <div className="modal">
            <div onClick={closeAuthModal} className="modal_close_X">
                X
            </div>
            <div className="modal_content_conatiner">
                <form action="">
                    <fieldset className="modal_form">
                        <legend>{logingOption ? "Pievienoties" : "Reģistrēties"}</legend>
                        {!logingOption ?
                            <React.Fragment>
                                <Input type="text" name="firstName" placeholder="Vārds" id="firstName" isRequired={true} />
                                <Input type="text" name="lastName" placeholder="Uzvārds" id="lastName" isRequired={true} />
                                <Input type="text" name="age" placeholder="Vecums" id="age" isRequired={true} />
                                <Select fields={genders} label="Dzimums" isRequired={true} name="gender" />
                            </React.Fragment> : null}
                        <Input type="email" name="email" placeholder="e-pasts" id="email" isRequired={true} />
                        <Input type="password" name="password" placeholder="parole" id="password" isRequired={true} />

                        <button className="auth_btn">Skriet!!!</button>
                        {!logingOption ? <button className="change_Auth_Option_Btn" onClick={() => {
                            changeAuthOptionInOpenModal(logingOption)
                        }}>Tomēr jau esi reģistrēts?...</button>
                            :
                            <button className="change_Auth_Option_Btn" onClick={() => {
                                changeAuthOptionInOpenModal(logingOption)
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