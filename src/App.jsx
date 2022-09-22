import { Routes, Route } from "react-router-dom";
import React, { Component, Fragment } from "react";
import NavSection from "./components/routes/navbar.component/navbar.component";
import Homepage from "./components/routes/homepage.component/homepage.component";
import Animal from "./components/routes/animal.page.component/animal.page.component";
import GlobalStyles from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Footer from "./components/footer-component/footer-component";
import About from "./components/routes/about.component/about.component";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#FFF5E4",
    footer: "#FEF5AC",
  },
  mobile: "768px",
};
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<NavSection />}>
          <Route index element={<Homepage />} />
          <Route path="/:id" element={<Animal />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
