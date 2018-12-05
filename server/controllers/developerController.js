const mongoose = require("mongoose");
const db = require("../models");
const Developer = db.Developer;

// Define your database controllers here!
// Ex: Create, Update, Delete, etc.

function createDevUser(data) {
  const newDev = new Developer({
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
function updateDevUser(data) {
  console.log("Updating", data);
  const query = { emailAddress: data.email };
  const update = Developer.findOneAndUpdate(query, {
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
exports.devAccountprocess = function(req, res, next) {
  const targetEmail = req.data.email;
  console.log("devAccount is running here", targetEmail);
  const creation = Developer.findOne({ emailAddress: targetEmail })
    .then(data => {
      console.log("is findone running?");
      if (data) {
        console.log("the data findOne sending is", req.data);
        return updateDevUser(req.data); // Returns the actual updated document
      } else {
        return createDevUser(req.data); // Returns the created document
      }
    })
    .catch(err => {
      // If an error occurred, send it to the client
      console.log(err);
    });
  return creation;
};

// Delete product from database
exports.devAccountDeleteOne = function(req, res, next) {
  console.log("Deleting an entry!");
  const emailAddress = req.body.emailAddress;
  const hasAccount = db.Developer.findOne({ emailAddress }).then(
    (data, err) => {
      if (err) return console.log("there's an error to find the item", err);
      if (data) {
        const confirmation = confirm(
          `Are you sure to delete this item?-> ${data}`
        );
        if (confirmation) {
          db.Developer.remove({ emailAddress: data.emailAddress });
          console.log("deleting was successful");
        } else {
          return;
        }
      }
    }
  );
  return hasAccount;
};

// Reads out all products
exports.readDevAccount = query => {
  if (query) {
    const accountList = db.Developer.find({
      emailAddress: query.emailAddress
    }).then((data, e) => {
      if (e) return console.log("error", e);
      return data;
    });
    return accountList;
  } else {
    const accountList = db.Developer.find({}).then((data, e) => {
      if (e) return console.log("error", e);
      return data;
    });
    return accountList;
  }
};
