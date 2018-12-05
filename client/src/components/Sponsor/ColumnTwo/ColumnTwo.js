import React from "react";
import Proposal from "./Proposal";
import "./ColumnTwo.css";
import FeedContainer from "../../Global/FeedContainer";

const ColumnTwo = () => (
  <div className="col-6">
    <Proposal />
    <FeedContainer />
  </div>
);

export default ColumnTwo;
