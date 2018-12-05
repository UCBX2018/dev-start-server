import React, { Component } from "react";
import Header from "../../Global/Header";
import ColumnOne from "../ColumnOne";
import ProposalColumnTwo from "./ProposalColumnTwo";
import ColumnThree from "../ColumnThree";
import "./CreateNewProposal.css";
import SideDrawer from "../../Global/SideDrawer";
import Backdrop from "../../Global/Backdrop";

class CreateNewProposal extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;

      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div className="container-flex">
        <div style={{ height: "100%" }}>
          <div className="wrapper">
            <div className="row dev-db-row">
              <Header drawerClickHandler={this.drawerToggleClickHandler} />
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}
              {sideDrawer}
              <ColumnOne />

              <ProposalColumnTwo />

              <ColumnThree />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNewProposal;
