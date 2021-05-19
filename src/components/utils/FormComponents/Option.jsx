function Option({ field }) {
    return <option name={field} value={field}>
        {field}
    </option>
}

export default Option;