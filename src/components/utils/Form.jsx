import Input from "./Input";
import Select from "./Select";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addRunner } from "../../actions/eventAction";

const genders = ["Vīrietis", "Sieviete"];

function Form({ event, closeModal, history, addRunner, getRunners }) {

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
        closeModal();

        addRunner(submitForm);
        history.push(`/success?event=${event.event}`);
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

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addRunner: (submitedData) => { dispatch(addRunner(submitedData)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Form));