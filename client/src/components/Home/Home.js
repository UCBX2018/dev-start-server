import React, { Component, Fragment } from "react";
import HomeHeader from "../Global/HomeHeader";
import Jumbotron from "../Home/Jumbotron";
import "./Home.css";
import "../../css/ds-global.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <HomeHeader />
        <Jumbotron />
      </Fragment>
    );
  }
}

export default Home;
