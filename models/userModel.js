const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  mail: {
    type: String,
    unique: true,
    required: true
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
