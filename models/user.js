const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  name: {type: String, required: true},
  continents: {
    countries: []
  }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;