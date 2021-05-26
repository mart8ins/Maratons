import Option from "./Option";

function Select({ fields, label, required, name, onChange }) {
    return <select onChange={onChange} name={name} required={required}>
        <option label={label}></option>
        {fields.map((field, index) => {
            return <Option key={index} field={field} />
        })}
    </select>
}

export default Select;