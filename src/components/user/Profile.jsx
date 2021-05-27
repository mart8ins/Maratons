import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "./Avatar";
import UserEvents from "./UserEvents";

import "./Profile.css";

function Profile() {
    const { loggedUser } = useContext(AuthContext);


    return <div className="profile_container">
        <Avatar />
        <UserEvents />
    </div>
}

export default Profile;
