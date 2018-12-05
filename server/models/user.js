const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");
//Schema for DevStart Users

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  username: String,
  password: Schema.Types.Mixed,
  state: String,
  image: Schema.Types.Mixed,
  isDev: Boolean,
  profileInfo: {
    gitHubURL: String,
    portfolioURL: String,
    education: Array,
    certifications: Array,
    skills: Array,
    ratings: Array,
    avgRating: Number
  },
  friends: Array,
  teams: Array
});
userSchema.pre("save", function(next) {
  var user = this;
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});
userSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
const User = mongoose.model("User", userSchema);
module.exports = User;
