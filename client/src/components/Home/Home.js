import React, { Component, Fragment } from "react";
import HomeHeader from "../Global/HomeHeader";
import Jumbotron from "../Home/Jumbotron";
import Introduction from "../Home/Introduction";
import "./Home.css";
import "../../css/ds-global.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <HomeHeader />
        <Jumbotron />
        <Introduction />
      </Fragment>
    );
  }
}

export default Home;
