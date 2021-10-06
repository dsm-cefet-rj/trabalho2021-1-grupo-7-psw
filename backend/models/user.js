const mongoose = require("mongoose");
const passport = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  document: {
    type: String,
    require: true,
  },
  role: {
    type: Number,
    require: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

userSchema.plugin(passport)
let Users = mongoose.model("User", userSchema);
module.exports = Users;
