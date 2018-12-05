import React, { Component } from "react";
import BigWrapper from "../SignUp/BigWrapper";
import MiniWrapper from "../SignUp/MiniWrapper";
import BrandSmall from "../SignUp/BrandSmall";
//import SocialButton from "./SocialButton";
import HomeHeader from "../Global/HomeHeader";
import { RedirectUser } from "./RedirectUser";
import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends Component {
  state = {
    userName: "",
    password: "",
    isDev: null,
    redirect: false
  };

  componentDidMount() {
    console.log(this.props);
    // the best thing we can do is pass that jwt token to server ,
    // set the status acordingly, but for now
    //const presence = window.localStorage.getItem("token");
    //this.setState({ redirect: presence ? true : false });
  }

  handleSubmit = async event => {
    event.preventDefault();
    //console.log("i am pressed");
    // Forward information (Username&Password) to the server ,
    // server checks if it is valid and responds with a token
    // we then save this token to the local storage
    console.log("data to be sent", this.state);
    let res = await fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify(this.state)
    });

    let data = await res.json();
    //console.log(`Hello, ${JSON.stringify(data.user)}`);
    //console.log(`Designation, ${JSON.stringify(data.isDev)}`);
    // ___ saving the received token to the local storage

    localStorage.setItem("token", data.token);

    // return <div>LOGGEDIN</div>;
    if (data.token) this.setState({ isloggedin: true });
    // console.log(this.state);
    this.setState({ isDev: data.isDev, redirect: true });
    // window.location.href = "/developer/dashboard";
  };

  handleRedirect = () => {
    if (this.state.isDev) return <Redirect to="/developer/dashboard" />;
    else return <Redirect to="/sponsor/dashboard" />;
    // A condition is needed to detrmine whether redirect to developer or sponsor's dashboard
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="page_background">
        <div className="container-flex">
          <HomeHeader />
          <BigWrapper>
            <MiniWrapper>
              <div>
                <BrandSmall />

                <div id="LoginForm">
                  <div className="container">
                    <div className="login-form">
                      <div className="main-div">
                        <div className="panel">
                          <h4>User Login</h4>
                          <p>Please enter your email and password</p>
                        </div>
                        <form id="Login" onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <input
                              type="userName"
                              className="form-control"
                              id="inputEmail"
                              placeholder="userName"
                              name="userName"
                              value={this.userName}
                              onChange={this.handleInputChange}
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword"
                              placeholder="Password"
                              name="password"
                              value={this.password}
                              onChange={this.handleInputChange}
                            />
                          </div>
                          <div className="something">
                            <a href="reset.html">Forgot password?</a>
                          </div>
                          <div className="something">
                            <a href="/signup">
                              Dont have an Account ? Sign Up here
                            </a>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={this.handleClick}
                          >
                            <i className="fab fa-facebook-square mr-1" />
                            Login with facebook{" "}
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={this.handleClick}
                          >
                            <i className="fab fa-github mr-1" />
                            Login with github{" "}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MiniWrapper>
          </BigWrapper>
        </div>
        {this.state.redirect ? this.handleRedirect() : null}
      </div>
    );
  }
}

export default Login;
