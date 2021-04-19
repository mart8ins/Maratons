import Option from "./Option";

function Select({ fields, label, isRequired, name, onChange }) {
    return <select onChange={onChange} name={name} required={isRequired}>
        <option label={label}></option>
        {fields.map((field, index) => {
            return <Option key={index} field={field} />
        })}
    </select>
}

export default Select;