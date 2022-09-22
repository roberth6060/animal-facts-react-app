import { Container } from "../../styles/Container.styled";
import Header from "../../header-component/header-component";
import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import React, { Component } from "react";
import { Animals } from "../../animals-component/animals-component";

const Homepage = () => {
  return (
    <Fragment>
      <Container>
        <Header />
        <p>Click on animal image to learn more!</p>
        <Animals />
      </Container>
    </Fragment>
  );
};

export default Homepage;
