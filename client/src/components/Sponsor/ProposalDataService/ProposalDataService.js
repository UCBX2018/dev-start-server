import axios from "axios";

// export default {
//   sendData: function(data) {
//     return axios
//       .post("http://localhost:3090/api/create_new_proposal", {
//         data: data
//       })
//       .then(function(res) {
//         if (res.status === 200) {
//           alert("New Proposal successfully made!");
//         } else {
//           alert(
//             "We're sorry, there's an error to create your proposal. Please try this again later or contact to us."
//           );
//         }
//         console.log(res);
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   },

//   getAvailableProposal: function() {
//     axios
//       .get("http://localhost:3090/api/available_proposal/")
//       .then(function(res) {
//         console.log(res.data);
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   }
// };

class ProposalDataService {
  sendData(data) {
    axios
      .post("http://localhost:3090/api/create_new_proposal", {
        data: data
      })
      .then(function(res) {
        if (res.status === 200) {
          alert("New Proposal successfully made!");
        } else {
          alert(
            "We're sorry, there's an error to create your proposal. Please try this again later or contact to us."
          );
        }
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  getAvailableProposal() {
    return axios
      .get("http://localhost:3090/api/available_proposal/")
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}

export default ProposalDataService;
