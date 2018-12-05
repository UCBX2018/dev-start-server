import React, { Component, Fragment } from "react";
import "./CreateProposal.css";
import ProposalDataService from "../../../ProposalDataService";

class CreateProposal extends Component {
  state = {
    proposalTitle: "",
    proposalBid: 0,
    proposalDetails: ""
  };

  proposalHandler = new ProposalDataService();
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(
      "ok, submit button is clicked and going to execute createProposal"
    );
    this.proposalHandler.sendData(this.state);
  };

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <h1 className="proposal-title">Create New Proposal</h1>
          <div className="card proposal-card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="proposalTitle">Proposal Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="proposalTitle"
                    placeholder="Proposal Title"
                    name="proposalTitle"
                    value={this.state.proposalTitle}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="proposalBid">Proposal Bid ( $ )</label>
                  <input
                    type="text"
                    className="form-control"
                    id="proposalBid"
                    placeholder="Proposal Bid"
                    name="proposalBid"
                    value={this.state.proposalBid}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Proposal Details">Proposal Details</label>
                  <textarea
                    className="form-control"
                    id="proposalDetails"
                    rows="10"
                    name="proposalDetails"
                    value={this.state.proposalDetails}
                    onChange={this.handleInputChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-ds-primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreateProposal;
