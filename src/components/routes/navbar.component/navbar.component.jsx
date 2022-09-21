import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import React, { Component } from "react";
const Navbar = () => (
  <Fragment>
    <h1>Navbar Section</h1>
    <Outlet />
  </Fragment>
);
export default Navbar;
