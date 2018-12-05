require("dotenv").config();
const passport = require("passport");
const Developer = require("../models/Developer");
const Sponsor = require("../models/Sponsor");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

//Create local strategy
const localOptions = { usernameField: "userName" };
const localLogin = new LocalStrategy(localOptions, function(
  userName,
  password,
  done
) {
  //console.log("this is something", this.userName);
  // here ,User trying to login can be either developer or sponsor.
  // check both collection to find a match

  //Verify this userName and password, call done with user if correct
  //Call done with false
  Developer.findOne({ userName }, function(err, user) {
    if (err) return done(err);
    if (!user) {
      Sponsor.findOne({ userName }, function(err, user) {
        if (err) return done(err);
        if (!user) return done(null, false);
        else
          user.comparePassword(password, function(err, isMatch) {
            if (err) return done(err);
            if (!isMatch) return done(null, false);
            return done(null, user);
          });
      });
    } else
      user.comparePassword(password, function(err, isMatch) {
        if (err) return done(err);
        if (!isMatch) return done(null, false);
        return done(null, user);
      });
  });
});

//Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: process.env.APP_SECRET
};

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  //See if user ID exists in db
  //If yes, call done with user
  //Else, call done without user
  Developer.find(payload.sub, function(err, user) {
    if (err) return done(err, false);
    if (!user) {
      Sponsor.find(payload.sub, function(err, user) {
        if (err) return done(err, false);
        if (!user) done(null, false);
        else done(null, user);
      });
    } else done(null, user);
  });
});

//Tell passport to use JWT Strategy
passport.use(jwtLogin);
passport.use(localLogin);
