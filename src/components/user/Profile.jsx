import React from "react";
import Avatar from "./Avatar";
import UserEvents from "./UserEvents";
import "./Profile.css";

function Profile() {
    return <div className="profile_container">
        <Avatar />
        <UserEvents />
    </div>
}

export default Profile;
