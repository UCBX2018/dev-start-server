import React from "react";
import { Link } from "react-router-dom";
import "./QuickStart.css";

const QuickStart = () => (
  <div className="nav">
    <div className="card quick-start-card">
      <div className="card-body">
        <h2 className="card-title quick-start-title">QuickStart</h2>
        {/* Below are hard coded. Replace with props with linked with BE */}

        <div className="card-text quick-start-context">
          <div>
            <ul className="nav-links">
              <Link
                to="/sponsor/dashboard"
                className={
                  window.location.pathname === "/sponsor/dashboard"
                    ? "active"
                    : "non-active"
                }
              >
                Home
              </Link>
              <br />
              <Link
                to="/sponsor/create_proposal"
                className={
                  window.location.pathname === "/sponsor/create_proposal"
                    ? "active"
                    : "non-active"
                }
              >
                Create Proposal
              </Link>
              <br />
              <a href="/">Search Devs</a>
              <br />
              <a href="/">Search Teams</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default QuickStart;
