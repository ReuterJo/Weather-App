import React from "react";

import logo from "../assets/weather-icons-master/design/fill/animation-ready/rain.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="Rain" width="120" />
    <h1 className="mb-4">CS361 Weather App</h1>

    <p className="lead">
      Customize your up to date weather forecast.
    </p>
  </div>
);

export default Hero;
