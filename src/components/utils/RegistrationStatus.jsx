function RegistrationStatus({ registrationOpen }) {
    const status = `Reģistrācija ${registrationOpen ? "atvērta" : "aizvērta"}`
    const statusColor = registrationOpen ? "open" : "closed";
    return (
        <div className={"registration_status " + statusColor}>
            {status}
        </div>
    )
}

export default RegistrationStatus;