import Input from "./Input";
import Select from "./Select";
import { useState } from "react";
import { Redirect, withRouter } from "react-router-dom"

const genders = ["Vīrietis", "Sieviete"];

function Form(props) {
    const event = props.event;
    const closeModal = props.closeModal;
    console.log(props)

    const [submitForm, setSubmitForm] = useState({
        event: event.event,
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        distance: "",
        email: ""
    })

    function onChange(e) {
        let sub = submitForm;
        setSubmitForm({
            ...sub,
            [e.target.name]: e.target.value
        })
    }


    function registerRunner(e) {
        e.preventDefault();
        console.log(submitForm, "Form komponentē");
        closeModal();
        props.history.push("/success");
    }

    return <form action="" method="post" onSubmit={registerRunner}>
        <fieldset className="registration_form_fields">
            <legend>{event.event}</legend>
            <Input onChange={onChange} type="text" name="firstName" placeholder="Vārds" id="firstName" isRequired={true} />
            <Input onChange={onChange} type="text" name="lastName" placeholder="Uzvārds" id="lastName" isRequired={true} />
            <Input onChange={onChange} type="text" name="age" placeholder="Vecums" id="age" isRequired={true} />
            <Input onChange={onChange} type="email" name="email" placeholder="e-pasts" id="email" isRequired={true} />
            <Select onChange={onChange} fields={genders} label="Dzimums" isRequired={true} name="gender" />
            <Select onChange={onChange} fields={event.distance} label="Distance" isRequired={true} name="distance" />
        </fieldset>
        <button className="register_to_event_btn">Reģistrēties</button>
    </form>
}

export default withRouter(Form);