import { Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/routes/navbar.component/navbar.component";
import Homepage from "./components/routes/homepage.component/homepage.component";

// const Data = async () => {
//   const res = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
//   const data = await res.json();
//   console.log(data);
// };

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Homepage />} />
      </Route>
    </Routes>
  );
};

export default App;
