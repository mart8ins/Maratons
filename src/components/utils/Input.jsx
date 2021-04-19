function Input({ type, name, placeholder, id, isRequired, onChange }) {
    return <input onChange={onChange} type={type} name={name} placeholder={placeholder} id={id} required={isRequired} />
}

export default Input;