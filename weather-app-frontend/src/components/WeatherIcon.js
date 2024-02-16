import React from "react";
import rain from "../assets/weather-icons-master/production/fill/all/rain.svg";
import clear from "../assets/weather-icons-master/production/fill/all/clear-day.svg";
import clouds from "../assets/weather-icons-master/production/fill/all/cloudy.svg";
import smoke from "../assets/weather-icons-master/production/fill/all/smoke.svg";
import snow from "../assets/weather-icons-master/production/fill/all/snow.svg";

const WeatherIcon = ({ description }) => {
    switch(description) {
        case "Rain": 
            return (
                <img className="ml-3 app-logo" src={rain} alt="Rain" width="200" />
            );
        case "Clear":
            return (
                <img className="ml-3 app-logo" src={clear} alt="Clear" width="200" />
            );
        case "Clouds":
            return (
                <img className="ml-3 app-logo" src={clouds} alt="Clouds" width="200" />
            );
        case "Smoke":
            return (
                <img className="ml-3 app-logo" src={smoke} alt="Smoke" width="200" />
            );
        case "Snow":
            return (
                <img className="ml-3 app-logo" src={snow} alt="Snow" width="200" />
            );
        default:
            return (
                <p>No asset found!</p>
            );
    }
}

export default WeatherIcon;
