import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white sticky-top">
      <div className="container-fluid">
        <a
          className="navbar-brand text-white"
          href="https://jerome-chauncey.github.io/One-Percent/"
        ></a>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
             
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
