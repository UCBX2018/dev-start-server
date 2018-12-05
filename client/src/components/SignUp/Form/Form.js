// import React, { Component } from "react";
// import "../SignUp.css";
// import BrandSmall from "../BrandSmall";
// import SelectState from "../SelectState";
// //import ReactDOM from "react-dom";

// //import AccountDataService from "../AccountDataService";

// class Form extends Component {
//   state = {
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//     state: "",
//     isdeveloper: true,
//     skills: {
//       //set of skills
//     },
//     education: {
//       //set of education
//     },
//     rating: 0,
//     valid: {
//       name: "",
//       username: "",
//       password: "",
//       re_password: "",
//       email: "",
//       state: "",
//       isdeveloper: true,
//       skills: {}
//     }
//   };
//   handleEmail = event => {
//     const { name, value } = event.target;
//     const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     console.log(value);
//     const result = emailRegEx.test(value);
//     console.log(result);
//     this.setState({ [name]: value, valid: result });
//   };
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
//   setPost = value => {
//     this.setState({ isdeveloper: value });
//   };
//   handleSubmit = event => {
//     event.preventDefault();
//   };

//   render() {
//     return (
//       <form className="">
//         <BrandSmall />
//         <h6> SignUp Form</h6>
//         <hr />
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleInputChange}
//             name="name"
//             className="form-control"
//             id="name"
//             placeholder="John Doe"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="name">Username</label>
//           <input
//             type="text"
//             value={this.state.username}
//             onChange={this.handleInputChange}
//             name="username"
//             className="form-control"
//             id="username"
//             placeholder="spiderman"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="Email">Email</label>
//           <input
//             type="text"
//             value={this.state.email}
//             onChange={this.handleEmail}
//             name="email"
//             className={
//               this.state.valid ? "valid form-control" : "invalid form-control"
//             }
//             id="email"
//             placeholder="John_Doe@company.com"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Create-Password</label>
//           <input
//             type="password"
//             value={this.state.password}
//             onChange={this.handleInputChange}
//             name="password"
//             className="form-control"
//             id="password"
//           />
//         </div>
//         <label className="mr-2">State </label>
//         <select
//           className="mr-5"
//           name="state"
//           value={this.state.state}
//           onChange={this.handleInputChange}
//         >
//           <SelectState />
//         </select>
//         <input
//           type="radio"
//           name="designation"
//           onClick={() => this.setPost(false)}
//           className="mr-1"
//           value={this.state.isdeveloper}
//         />
//         <label className="mr-3"> I am a sponser </label>
//         <input
//           type="radio"
//           name="designation"
//           onClick={() => this.setPost(true)}
//           className="mr-1"
//           value={this.state.isdeveloper}
//         />
//         <label className="mr-3"> I am developer </label>
//         <hr />
//         <div className="information">
//           <a href="/login">Already Have an Account? Login Here</a>
//         </div>
//         <button
//           onClick={this.handleSubmit}
//           type="submit"
//           className="btn buttonclass"
//         >
//           Submit
//         </button>
//       </form>
//     );
//   }
// }

// export default Form;

import React, { Component } from "react";
import "../SignUp.css";
import BrandSmall from "../BrandSmall";
import SelectState from "../SelectState";
import ReactDOM from "react-dom";
import "./Form.css";
import AccountDataService from "../AccountDataService";
import axios from "axios";
class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    userName: "",
    emailAddress: "",
    password: "",
    state: "",
    isDev: true
    // skills: {
    //   //set of skills
    // },
    // education: {
    //   //set of education
    // },
    // rating: 0,
    // valid: {
    //   firstName: "",
    //   lastName: "",
    //   userName: "",
    //   password: "",
    //   re_password: "",
    //   email: "",
    //   state: "",
    //   isDev: true,
    //   skills: {}
    // }
  };

  createAccount = new AccountDataService();

  handleEmail = event => {
    const { name, value } = event.target;
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(value);
    const result = emailRegEx.test(value);
    console.log(result);
    this.setState({ [name]: value, valid: result });
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  setPost = value => {
    this.setState({ isDev: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(
      "ok, submit button is clicked and going to execute createAccount",
      this.state
    );
    //this.createAccount.sendData(this.state);
    axios.post("/api/signup", JSON.stringify(this.state));
  };

  render() {
    return (
      <form className="">
        <BrandSmall />
        <h6> SignUp Form</h6>
        <hr />
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            name="firstName"
            className="form-control"
            id="firstName"
            placeholder="John"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            onChange={this.handleInputChange}
            name="lastName"
            className="form-control"
            id="lastName"
            placeholder="Doe"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleInputChange}
            name="userName"
            className="form-control"
            id="userName"
            placeholder="spiderman"
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            value={this.state.emailAddress}
            onChange={this.handleEmail}
            name="emailAddress"
            className={
              this.state.valid ? "valid form-control" : "invalid form-control"
            }
            id="emailAddress"
            placeholder="John_Doe@company.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Create-Password</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            name="password"
            className="form-control"
            id="password"
          />
        </div>
        <label className="mr-2">State </label>
        <select
          className="mr-5 selectState"
          name="state"
          value={this.state.state}
          onChange={this.handleInputChange}
        >
          <SelectState />
        </select>
        <input
          type="radio"
          name="designation"
          onClick={() => this.setPost(false)}
          className="mr-1"
          value={this.state.isDev}
        />
        <label className="mr-3"> I am a sponser </label>
        <input
          type="radio"
          name="designation"
          onClick={() => this.setPost(true)}
          className="mr-1"
          value={this.state.isDev}
        />
        <label className="mr-3"> I am developer </label>
        <hr />
        <button
          onClick={this.handleSubmit}
          type="submit"
          className="btn btn-secondary"
        >
          Submit
        </button>
        {console.log(this.state)}
      </form>
    );
  }
}

export default Form;
