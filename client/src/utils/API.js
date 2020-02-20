import axios from "axios";

export default {
  getSavedIcecreams: function() {
    return axios.get("/api/icecream");
  },
  
  saveIcecream: function(icecreamData) {
    return axios.post("/api/icecream", icecreamData);
  },

  loginUser: function(email, password) {
    return axios.post("/api/auth", {email, password})
  },

  createUser: function(user) {
    return axios.post("/api/users", user)
  }
};