import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LogOut.css";
class LogOut extends Component {
  state = {
    redirect: false
  };
  handleClick = () => {
    localStorage.removeItem("token");
    this.setState({ redirect: true });
  };
  handleRedirect = () => {
    return <Redirect to="/login" />;
  };
  render() {
    return (
      <reactFragment>
        {this.state.redirect ? this.handleRedirect() : null}
        <button className="logout" onClick={this.handleClick}>
          Log-Out
        </button>
      </reactFragment>
    );
  }
}

export default LogOut;
