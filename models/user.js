const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
email: {
    type: String,
    unique: true,
    required: true
},
password: {
    type: String,
    unique: false,
    required: true
},
username: {
  type: String,
  unique: false,
  required: true
},
createdAt: {
  type: Date,
  default: Date.now()
}
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.validPassword = function(password, encrypted) {
  return bcrypt.compareSync(password, encrypted);
}

const User = mongoose.model("User", userSchema);

module.exports = User;