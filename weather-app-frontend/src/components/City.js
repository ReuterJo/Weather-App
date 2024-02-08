import React from "react";

const City = ({city}) => (
  <ul>
    {city.map((city) => (
      <li key={city.id}>{city.name}</li>
    ))}
  </ul>
);

export default City;
