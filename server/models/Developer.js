const mongoose = require("mongoose");
const timestampPlugin = require("./plugins/timestamp");
const bcrypt = require("bcrypt-nodejs");
const DeveloperSchema = new mongoose.Schema({
  // _id: mongoose.Schema.ObjectId,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  isDev: {
    type: Boolean,
    default: true
  },
  image: {
    type: String
  }
  // we need some more for skills,education and rating
});
DeveloperSchema.pre("save", function(next) {
  var user = this;
  console.log("i am about see whats happening............");
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
DeveloperSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
DeveloperSchema.plugin(timestampPlugin);

const Developer = mongoose.model("Developer", DeveloperSchema);

module.exports = Developer;
