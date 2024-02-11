import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loadCity, deleteCity } from "../routing/routes";
import { Button, Container } from "reactstrap";

const City = ({ city_id, userProfile, setUserProfile }) => {
  const [city, setCity] = useState([]);
  
  useEffect(() => {
    loadCity(city_id, setCity);
  }, [city_id, setCity]);

  return (
    <Container className="mt-4 city-container shadow-lg">
      <h5 className="mx-2">  
        <FontAwesomeIcon icon="city" className="mr-4 mt-2" />
        {city.name}
        <Button onClick={deleteCity(city_id, userProfile, setUserProfile)} className="float-right bg-transparent border-0">
          <FontAwesomeIcon icon="trash" className="text-dark" />
        </Button>
      </h5>
      <div className="m-4">
        <p>State: {city.state}</p>
        <p>Country: {city.country}</p>
      </div>
    </Container>
  );
};

export default City;
