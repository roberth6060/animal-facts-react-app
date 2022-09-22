import { Container } from "../../styles/Container.styled";
import Header from "../../header-component/header-component";
import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import React, { Component } from "react";
// import GlobalStyles from "../../styles/Global";
import { Animals } from "../../animals-component/animals-component";

const theme = {
  colors: {
    header: " #fa9494",
    body: "#ffff",
    footer: "#647E68",
  },
};

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyles> */}
      <Fragment>
        <Header />
        <Container>
          <p>Click on animal image to learn more!</p>
        </Container>
        <Animals />
      </Fragment>
      {/* </GlobalStyles> */}
    </ThemeProvider>
  );
};

export default Homepage;
