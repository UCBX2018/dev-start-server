require("dotenv").config();
const jwt = require("jwt-simple");
const Developer = require("../models/Developer");
const Sponsor = require("../models/Sponsor");
const mongoose = require("mongoose");
//token generator , We are saving _id,userName,and time stamp on token
//and Token is ecoded with app_secret, which is only available on server
//this app_secret key will later be used for decoding the information
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode(
    { sub: user.id, us: user.userName, is: user.isDev, iat: timestamp },
    process.env.APP_SECRET
  );
}

exports.signin = function(req, res, next) {
  //User has already had email and password authed
  //We just need to give them a token
  res.json({
    token: tokenForUser(req.user),
    isDev: req.user.isDev
  });
};

exports.signup = function(req, res, next) {
  // User is either developer or sponsor, since we have two collection,
  // we must check the req body to determine the specific collection
  // if its developer save to developer collection or sponsor collection
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailAddress = req.body.emailAddress;
  const password = req.body.password;
  const state = req.body.state;
  const userName = req.body.userName;
  const isDev = req.body.isDev;

  console.log(req.body);

  // make sure field is not empty
  if (!emailAddress || !password) {
    return res
      .status(422)
      .send({ error: "You must provide email and password" });
  }
  isDev
    ? Developer.findOne({ userName: userName }, function(err, existingUser) {
        if (err) return next(err);

        //If yes, return error
        if (existingUser)
          return res.status(422).send({ error: "Username already exists!" });

        const developer = new Developer({
          firstName,
          lastName,
          emailAddress,
          password,
          state,
          userName,
          isDev: true
          // add the rest of the info from the form and save it to its proper place in the schema
        });

        console.log(developer);

        developer.save(function(err) {
          if (err) return next(err);
          //If no, respond to request indicating user was created
          res.json({ token: tokenForUser(developer) });
        });
      })
    : Sponsor.findOne({ userName: userName }, function(err, existingUser) {
        if (err) return next(err);
        if (existingUser)
          return res.status(422).send({ error: "Username already exists!" });

        const sponsor = new Sponsor({
          firstName,
          lastName,
          emailAddress,
          password,
          state,
          userName,
          isDev: false
          // add the rest of the info from the form and save it to its proper place in the schema
        });

        console.log(sponsor);

        sponsor.save(function(err) {
          if (err) return next(err);
          //If no, respond to request indicating user was created
          res.json({ token: tokenForUser(sponsor) });
        });
      });
};
