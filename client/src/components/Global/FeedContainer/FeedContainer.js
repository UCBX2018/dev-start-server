import React, { Component } from "react";
import "./FeedContainer.css";
import ProposalCard from "../ProposalCard";
// import API from "../../Sponsor/ProposalDataService";
import axios from "axios";

class FeedContainer extends Component {
  state = {
    query: []
  };

  // handleInputChange = () => {
  //   this.setState({
  //     query: this.search.value
  //   });
  // };

  componentDidMount() {
    // this.loadFeeds();
    fetch("http://localhost:3090/api/available_proposal/")
      .then(result => {
        console.log("this is result", result);
        return result.json();
        //this.setQuery(JSON.parse(result.data));
      })
      .then(data => {
        console.log("data", data);
        this.setQuery(data);
      });
    // this.setQuery(result)
  }

  setQuery = result => {
    this.setState({ query: result });
  };

  // proposalApi = new ProposalData();

  // loadFeeds = () => {
  //   API.getAvailableProposal()
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         query: res
  //       });
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));

  // let res = fetch("/api/available_proposal/", { method: "GET" });
  // let data = res.json();
  // console.log(data);
  // };

  render() {
    console.log(this.state.query);
    return (
      <div className="feed-wrapper">
        {this.state.query.map(proposal => (
          <ProposalCard
            id={proposal._id}
            key={proposal._id}
            title={proposal.proposalTitle}
          />
        ))}
        {/* <ProposalCard /> */}
      </div>
    );
  }
}

export default FeedContainer;
