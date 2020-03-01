import axios from "axios";

export default {
  loginUser: function(email, password) {
    return axios.post("/api/auth", {email, password})
  },

  createUser: function(user) {
    return axios.post("/api/users", user)
  }
};