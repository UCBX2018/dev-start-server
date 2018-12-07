import React from "react";
import "./Introduction.css";

const Introduction = () => (
  <div className="intro-wrapper">
    <div className="developer-intro-wrap">
      <div className="text-wrapper-for-developer col-6 container text-left">
        <h2>Dev Start Developers</h2>
        <p>What makes people to be a developer? Experience and projects. </p>
        <p>
          Dev Start is the platform where people can grow as a developer to tap
          into the tech field.
        </p>
        <p>
          Opportunities are here. Either paid or non-paid, you will be the
          developer for business owners and entrepreneurs.
        </p>
      </div>
      <div className="developer-img col-6" />
    </div>

    <div className="entre-intro-wrap">
      <div className="entre-img col-6" />
      <div className="text-wrapper-for-entrepreneur col-6 container text-left">
        <h2>Dev Start entrepreneurs</h2>
        <p>
          Post your project and hire developer who wants your project in a
          minute.
        </p>
        <p>
          Dev Start is the platform where business owners and entrepreneurs can
          make their project come true.
        </p>
        <p>
          Your ideaa and projects are valuable. Make this happen with developers
          who are passionate about making it happening.{" "}
        </p>
      </div>
    </div>
  </div>
);

export default Introduction;
