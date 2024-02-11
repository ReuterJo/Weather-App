import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Welcome from "../components/Welcome";

import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Fragment>
      {!isAuthenticated && (
        <Hero />
      )}
      {isAuthenticated && (
        <Welcome />
      )}
    </Fragment>
  );
};

export default Home;
