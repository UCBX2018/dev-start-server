import React from "react";
import "./Jumbotron.css";
import { Link } from "react-router-dom";

const Jumbotron = () => (
  <div className="main-head jumbotron bg-ds-white">
    <div className="main-content container text-center">
      <div className="text-wrapper">
        <h1>DevStart</h1>
        <h2>Start a project, Start a career, Start today</h2>
      </div>

      <div className="main-buttons-wrapper">
        <Link
          to="/sponsor/dashboard"
          className="btn btn-ds-primary btn-lg main-button"
          role="button"
        >
          I'm a sponsor
        </Link>
        <Link
          to="/developer/dashboard"
          className="btn btn-ds-primary btn-lg main-button"
          role="button"
        >
          I'm a developer
        </Link>
      </div>
    </div>
  </div>
);

export default Jumbotron;
