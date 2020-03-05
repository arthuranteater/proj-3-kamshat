const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
firstname: {
    type: String,
    unique: false,
    required: true
},
lastname: {
    type: String,
    unique: false,
    required: true,
},
email: {
    type: String,
    unique: true,
    required: true
},
username: {
    type: String,
    unique: true,
    required: true
},
password: {
    type: String,
    unique: false,
    required: true
},
admin: {
  type: Boolean,
  unique: false,
  required: true,
  default: false
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