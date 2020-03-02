import React from "react";
import Joi from "joi-browser";
import Form from "../components/Form";
import API from "../utils/API";
import { motion } from "framer-motion";

class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    const { data } = this.state;
    await API.loginUser(data.username, data.password);
  };

  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </motion.div>
    );
  }
}

export default Login;
