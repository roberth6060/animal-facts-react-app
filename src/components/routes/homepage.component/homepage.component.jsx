import { Container } from "../../styles/Container.styled";
import Header from "../../header-component/header-component";
import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import React, { Component } from "react";
// import GlobalStyles from "../../styles/Global";
import Animals from "../../animals-component/animals-component";

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
          <p>
            displays it as a list/table/ When clicking on ana item in the
            list/table, more details about that item should be displayed. <br />{" "}
            Details about the item should be fetched by clicking on that item
            and displayed on a separate page.
          </p>
        </Container>
        <Animals />
      </Fragment>
      {/* </GlobalStyles> */}
    </ThemeProvider>
  );
};

export default Homepage;
