import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadCity, deleteCity } from "../routing/routes";
import { Button, Container, Row, Col } from "reactstrap";
import WeatherIcon from "./WeatherIcon"

const City = ({ city_id, userProfile, setUserProfile, setCities }) => {
  const [city, setCity] = useState([]);
  
  function kelvinToFahrenheit(temp) {
    return Math.round((temp - 273.15) * 9/5 + 32);
  }

  useEffect(() => {
    loadCity(city_id, setCity);
  }, [city_id, setCity]);

  return (
    <Container className="mt-4 city-container shadow-lg">
      <h5 className="mx-2">  
        <FontAwesomeIcon icon="city" className="mr-4 mt-2" />
        {city.name}
        <Button className="float-right bg-transparent border-0"
          onClick={() => {
            deleteCity(city_id, userProfile, setUserProfile, setCities)
        }}>
          <FontAwesomeIcon icon="trash" className="text-dark" />
        </Button>
      </h5>
      <Row className="m-4">
        <Col key={1} md={6}>
          <p>State: {city.state}</p>
          <p>Country: {city.country}</p>
          <p>Temperature: {kelvinToFahrenheit(city.temp)}</p>
          <p>Feels Like: {kelvinToFahrenheit(city.feels_like)}</p>
          <p>High: {kelvinToFahrenheit(city.temp_max)}</p>
          <p>Low: {kelvinToFahrenheit(city.temp_min)}</p>
          <p>Description: {city.description}</p>
        </Col>
        <Col key={2} md={6}>
          <WeatherIcon description={city.description} />
        </Col>
      </Row>
    </Container>
  );
};

export default City;
