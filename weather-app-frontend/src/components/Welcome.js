import React from "react";

import logo from "../assets/weather-icons-master/design/fill/animation-ready/clear-day.svg";

import { useAuth0 } from "@auth0/auth0-react";

const Welcome = () => {
    const { user } = useAuth0();

    return (
        <div className="text-center hero my-5">
            <img className="mb-3 app-logo" src={logo} alt="Rain" width="120" />
            <h1 className="mb-4">CS361 Weather App</h1>

            <p className="lead">
                Welcome {user.name}! How's the weather today?
            </p>
        </div>
  );
};

export default Welcome;
