// import Input from "./Input";
// import Select from "./Select";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";

// import { useContext } from "react";
// import { RunnersContext } from "../../../context/RunnersContext";

// const genders = ["Vīrietis", "Sieviete"];

// function Form(props) {
//     let history = useHistory();
//     const { allRunners, setRunners } = useContext(RunnersContext);

//     const [submitForm, setSubmitForm] = useState({
//         event: props.event.event,
//         firstName: "",
//         lastName: "",
//         age: "",
//         gender: "",
//         distance: "",
//         email: ""
//     })

//     function onChange(e) {
//         let sub = submitForm;
//         setSubmitForm({
//             ...sub,
//             [e.target.name]: e.target.value
//         })
//     }


//     function registerRunner(e) {
//         e.preventDefault();
//         props.closeModal();
//         setRunners([
//             ...allRunners,
//             submitForm
//         ])

//         history.push(`/success?event=${props.event.event}`);
//     }

//     return <form action="" method="post" onSubmit={registerRunner}>
//         <fieldset className="registration_form_fields">
//             <legend>{props.event.event}</legend>
//             <Input onChange={onChange} type="text" name="firstName" placeholder="Vārds" id="firstName" isRequired={true} />
//             <Input onChange={onChange} type="text" name="lastName" placeholder="Uzvārds" id="lastName" isRequired={true} />
//             <Input onChange={onChange} type="text" name="age" placeholder="Vecums" id="age" isRequired={true} />
//             <Input onChange={onChange} type="email" name="email" placeholder="e-pasts" id="email" isRequired={true} />
//             <Select onChange={onChange} fields={genders} label="Dzimums" isRequired={true} name="gender" />
//             <Select onChange={onChange} fields={props.event.distance} label="Distance" isRequired={true} name="distance" />
//         </fieldset>
//         <button className="register_to_event_btn">Reģistrēties</button>
//     </form>
// }

// export default Form;