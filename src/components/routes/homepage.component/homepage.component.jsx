import { Container } from "../../styles/Container.styled";
import { Fragment } from "react";
import React from "react";
import { Animals } from "../../animals-component/animals-component";

const Homepage = () => {
  return (
    <Fragment>
      <Container>
        <h1>Animal Facts Table</h1>
        <p>Click on animal image to learn more!</p>
        <Animals />
      </Container>
    </Fragment>
  );
};

export default Homepage;
