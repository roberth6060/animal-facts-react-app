import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/routes/navbar.component/navbar.component";
import Homepage from "./components/routes/homepage.component/homepage.component";
import Animal from "./components/routes/animal.page.component/animal.page.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Homepage />} />
        <Route path="/:id" element={<Animal />} />
      </Route>
    </Routes>
  );
};

export default App;
