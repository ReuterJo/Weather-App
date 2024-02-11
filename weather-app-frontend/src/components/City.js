import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "reactstrap";

const City = ({city}) => (
  <Container className="mt-4 city-container">
    <h6 className="mb-3 text-primary">  
      {city.name}
    </h6>
    <p>Country: {city.country}</p>
  </Container>
);

export default City;
