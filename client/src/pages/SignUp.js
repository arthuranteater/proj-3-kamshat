import React from "react";
import Joi from "joi-browser";
import Form from "../components/Form";
import API from "../utils/API";
import { motion } from "framer-motion";

class SignUp extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .email()
      .label("Username"),
    password: Joi.string()
      .min(8)
      .required()
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = async () => {
    const { data } = this.state;
    await API.createUser({
      email: data.username,
      password: data.password,
      name: data.name
    });
  };
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Sign Up")}
        </form>
      </motion.div>
    );
  }
}

export default SignUp;
