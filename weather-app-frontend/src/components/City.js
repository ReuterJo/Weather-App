import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadCity, deleteCity } from "../routing/routes";
import { Button, Container, Row, Col } from "reactstrap";
import logo from "../assets/weather-icons-master/design/fill/animation-ready/rain.svg";

const City = ({ city_id, userProfile, setUserProfile, setCities }) => {
  const [city, setCity] = useState([]);
  
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
          <p>Temperature: TBD</p>
          <p>Feels Like: TBD</p>
          <p>High: TBD</p>
          <p>Low: TBD</p>
          <p>Description: TBD</p>
        </Col>
        <Col key={2} md={6}>
          <img className="ml-3 app-logo" src={logo} alt="Rain" width="200" />
        </Col>
      </Row>
    </Container>
  );
};

export default City;
