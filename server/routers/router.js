const developer = require("../controllers/developerController.js");
const sponsor = require("../controllers/sponsorController.js");

const passportService = require("../config/passport");
const Authentication = require("../controllers/authentication");
const passport = require("passport");
const path = require("path");
// All the Login strategies
const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  // Ensures your react app is being served at all times
  app.get("*", function(req, res, next) {
    res.sendFile(__dirname, "../client/build/index.html"); ///try different way
  });
  app.get("/api", requireAuth);
  // If the password / username combination is correct, give the user a token. If no, don't authenticate
  app.post("/api/signin", requireSignin, Authentication.signin);
  // app.post("/api/createprofile", Authention.)
  app.post("/api/signup", Authentication.signup);
  // Wire up API routes here!

  app.post("api/developer/createprofile", requireAuth, function(
    req,
    res,
    next
  ) {});
  app.get("/api/developer/account", function(req, res, next) {
    developer
      .readDevAccount()
      .then(function(data) {
        console.log("successfully get accountinfo from database.");
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  app.post("/api/developer/account/create", function(req, res, next) {
    console.log("let's see what request's body is: ", req.body);
    developer
      .devAccountprocess(req.body)
      .then(function(data) {
        console.log("successfully create/update developer account.");
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  //add
  app.get("/api/sponsor/account", function(req, res, next) {
    sponsor
      .readSponsAccount()
      .then(function(data) {
        console.log("successfully get accountinfo from database.");
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  app.post("/api/sponsor/account/create", function(req, res, next) {
    console.log("let's see what request's body is: ", req.body);
    sponsor
      .sponsAccountprocess(req.body)
      .then(function(data) {
        console.log("successfully create/update developer account.");
        res.json(data);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });

  app.get("/test", function(req, res, next) {
    console.log("HIT IT");
    const data = [
      "this ",
      "is ",
      "mock ",
      "data ",
      "take ",
      "this ",
      "shit!!!"
    ];
    res.json(data);
  });
};
