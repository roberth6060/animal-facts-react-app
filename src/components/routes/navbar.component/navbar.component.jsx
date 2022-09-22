import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import React, { Component } from "react";
const Navbar = () => (
  <Fragment>
    <h1>
      <Link to="/">Navbar Section</Link>
    </h1>
    <Outlet />
  </Fragment>
);
export default Navbar;
