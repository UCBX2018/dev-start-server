import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "./components/Home";
//uncomment this below and the route when signup form is ready
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import DeveloperDashboard from "./components/Developer/Dashboard/Dashboard";
import CreateProfile from "./components/CreateProfile";
import DeveloperProfile from "./components/Developer/Profile/Profile";
import SponsorDashboard from "./components/Sponsor/Dashboard";
import { RedirectUser } from "./components/Login/RedirectUser";
import CreateNewProposal from "./components/Sponsor/CreateNewProposal";
//Global CSS Style
//import "./css/ds-global.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isloggedin: false };
    //this.PrivateRoute = this.PrivateRoute.bind(this);
  }
  componentDidMount() {
    const presence = window.localStorage.getItem("token");
    this.setState({ isloggedin: presence ? true : false });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/signup" component={SignUp} />
          {/* <PrivateRoute path="/developer/dashboard" component={userDashboard} /> */}
          {/* <PrivateRoute path="/createprofile" component={createProfile} /> */}
          <Route
            path="/login"
            // component={this.state.isloggedin ? Login : Login}
            component={Login}
          />
          <Route
            path="/createprofile"
            // component={this.state.isloggedin ? CreateProfile : Login}
            component={CreateProfile}
          />
          <Route
            path="/developer/dashboard"
            // component={this.state.isloggedin ? DeveloperDashboard : Login}
            component={DeveloperDashboard}
          />
          <Route
            path="/sponsor/dashboard"
            // component={this.state.isloggedin ? SponsorDashboard : Login}
            component={SponsorDashboard}
          />
          <Route
            path="/sponsor/create_proposal"
            // component={this.state.isloggedin ? SponsorDashboard : Login}
            component={CreateNewProposal}
          />

          <Route exact path="*" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./components/Home";
// //uncomment this below and the route when signup form is ready
// import SignUpForm from "./components/SignUp";
// import Login from "./components/Login";
// import create from "./components/CreateProfile";
// import DeveloperDashboard from "./components/Developer/Dashboard/Dashboard";
// import DeveloperProfile from "./components/Developer/Profile/Profile";
// import SponsorDashboard from "./components/Sponsor/Dashboard";
// import CreateNewProposal from "./components/Sponsor/CreateNewProposal";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/signup" component={SignUpForm} />
//           <Route exact path="/createprofile" component={create} />
//           <Route path="/developer/dashboard" component={DeveloperDashboard} />
//           <Route path="/developer/profile" component={DeveloperProfile} />
//           <Route path="/sponsor/dashboard" component={SponsorDashboard} />
//           <Route
//             path="/sponsor/create_proposal"
//             component={CreateNewProposal}
//           />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
