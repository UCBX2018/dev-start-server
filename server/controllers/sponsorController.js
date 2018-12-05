const mongoose = require("mongoose");
const db = require("../models");
const Sponsor = db.Sponsor;

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

function createSponsUser(data) {
  const newDev = new Sponsor({
    _id: new mongoose.Types.ObjectId(),
    firstName: data.firstName,
    lastName: data.lastName,
    userName: data.userName,
    emailAddress: data.email,
    password: data.password,
    state: data.state,
    isDev: data.isDev
  });
  const creation = newDev.save().then((data, err) => {
    if (err) return console.log(err);
    return data;
  });
  return creation;
}

// Update an existing product
function updateSponsUser(data) {
  console.log("Updating", data);
  const query = { emailAddress: data.email };
  const update = Sponsor.findOneAndUpdate(query, {
    firstName: data.firstName,
    lastName: data.lastName,
    userName: data.userName,
    emailAddress: data.email,
    password: data.password,
    state: data.state,
    isDev: data.isDev
  })
    .then(result => {
      return result;
    })
    .catch(err => {
      return console.log("here's the error", err);
    });
  return update;
}

// Decides whether or not to create or update
exports.sponsAccountprocess = function(req, res, next) {
  const targetEmail = req.data.email;
  console.log("devAccount is running here", targetEmail);
  const creation = Sponsor.findOne({ emailAddress: targetEmail })
    .then(data => {
      console.log("is findone running?");
      if (data) {
        console.log("the data findOne sending is", req.data);
        return updateSponsUser(req.data); // Returns the actual updated document
      } else {
        return createSponsUser(req.data); // Returns the created document
      }
    })
    .catch(err => {
      // If an error occurred, send it to the client
      console.log(err);
    });
  return creation;
};

// Delete product from database
exports.sponsAccountDeleteOne = function(req, res, next) {
  console.log("Deleting an entry!");
  const emailAddress = req.body.emailAddress;
  const hasAccount = db.Sponsor.findOne({ emailAddress }).then((data, err) => {
    if (err) return console.log("there's an error to find the item", err);
    if (data) {
      const confirmation = confirm(
        `Are you sure to delete this item?-> ${data}`
      );
      if (confirmation) {
        db.Sponsor.remove({ emailAddress: data.emailAddress });
        console.log("deleting was successful");
      } else {
        return;
      }
    }
  });
  return hasAccount;
};

// Reads out all products
exports.readSponsAccount = query => {
  if (query) {
    const accountList = db.Sponsor.find({
      emailAddress: query.emailAddress
    }).then((data, e) => {
      if (e) return console.log("error", e);
      return data;
    });
    return accountList;
  } else {
    const accountList = db.Sponsor.find({}).then((data, e) => {
      if (e) return console.log("error", e);
      return data;
    });
    return accountList;
  }
};
