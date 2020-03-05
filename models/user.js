const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: {type: String, required: true},
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.validPassword = function(password, encrypted) {
  return bcrypt.compareSync(password, encrypted);
}

const User = mongoose.model("User", userSchema);

module.exports = User;