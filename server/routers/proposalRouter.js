const path = require("path");
const proposal = require("../controllers/proposalController.js");

module.exports = function(app) {
  app.post("/api/create_new_proposal/", function(req, res, next) {
    console.log("let's see what request's body is: ", req.body);
    proposal
      .createNewProposal(req.body)
      .then(function(data) {
        console.log("successfully create/update proposal.", data);
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  app.get("/api/available_proposal/", function(req, res, next) {
    console.log("let's see what request's body is: ", req.body);
    proposal
      .getAvailableProposal()
      .then(function(data) {
        console.log("successfully loaded proposal data.", data);
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
};
