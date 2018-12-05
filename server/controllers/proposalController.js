const db = require("../sqlDatabase/models");
const Proposal = db.Proposal;

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

// proposalTitle: "",
// proposalBid: 0,
// proposalDetails: "",

exports.createNewProposal = (req, res, next) => {
  console.log("theis is request", req);
  const data = req.data;
  const creation = Proposal.create({
    proposalTitle: data.proposalTitle,
    proposalBid: data.proposalBid,
    proposalDetails: data.proposalDetails,
    createdAt: new Date(),
    updatedAt: new Date()
  })
    .then(result => {
      console.log(
        "this is what returned from database after creating data.",
        result
      );
      return result;
    })
    .catch(err => {
      return console.log("here's the error", err);
    });
  console.log("これがクリエーションです。", creation);
  return creation;
};

exports.getAvailableProposal = (req, res, next) => {
  console.log("theis is request", req);
  const creation = Proposal.findAll({
    where: {
      isTaken: false
    }
  })
    .then(data => {
      console.log(
        "this is what returned from database after creating data.",
        data
      );
      return data;
    })
    .catch(err => {
      return console.log("here's the error", err);
    });
  return creation;
};

function findItem(query) {
  Proposal.findOne({
    where: {
      query
    }
  }).then(function(result) {
    res.json(result);
  });
}

// Update an existing product
function updateProposal(data) {
  console.log("Updating", data);
  const query = { _id: data._id };
  Proposal.update(data.body, {
    where: {
      query
    }
  })
    .then(function(proposalDb) {
      return proposalDb;
    })
    .catch(err => {
      return console.log("here's the error", err);
    });
}

// Decides whether or not to create or update

// Delete product from database
// exports.devAccountDeleteOne = function(req, res, next) {
//   console.log("Deleting an entry!");
//   const emailAddress = req.body.emailAddress;
//   const hasAccount = db.Developer.findOne({ emailAddress }).then(
//     (data, err) => {
//       if (err) return console.log("there's an error to find the item", err);
//       if (data) {
//         const confirmation = confirm(
//           `Are you sure to delete this item?-> ${data}`
//         );
//         if (confirmation) {
//           db.Developer.remove({ emailAddress: data.emailAddress });
//           console.log("deleting was successful");
//         } else {
//           return;
//         }
//       }
//     }
//   );
//   return hasAccount;
// };

// Reads out all products
// exports.readDevAccount = query => {
//   if (query) {
//     const accountList = db.Developer.find({
//       emailAddress: query.emailAddress
//     }).then((data, e) => {
//       if (e) return console.log("error", e);
//       return data;
//     });
//     return accountList;
//   } else {
//     const accountList = db.Developer.find({}).then((data, e) => {
//       if (e) return console.log("error", e);
//       return data;
//     });
//     return accountList;
//   }
// };
