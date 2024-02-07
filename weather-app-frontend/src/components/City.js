import React from "react";

const City = ({city}) => (
  <ul>
    {city.map((city) => (
      <li key={city.id}>{city.title}</li>
    ))}
  </ul>
);

export default City;
