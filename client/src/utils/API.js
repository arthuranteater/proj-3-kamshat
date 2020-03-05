import axios from "axios";

export default {

  createUser: function(user) {
    return axios.post("/api/users", user)
  },

  loginUser: function(email, password) {
    return axios.post("/api/auth", {email, password})
  },

  getCityCards: function() {
    return axios.get("/api/cities");
  },
  
  getCityCard: function(id) {
    return axios.get("/api/cities/" + id);
  },
 
  deleteCityCard: function(id) {
    return axios.delete("/api/cities/" + id);
  },

  saveCityCard: function(cityData) {
    return axios.post("/api/cities", cityData);
  }
};