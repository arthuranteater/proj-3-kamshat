import React from 'react';
import Joi from "joi-browser";
import Form from "./Form";
import API from "../utils/API";

class SignUp extends Form {
    state = { 
        data: {username: "", password: "", name: ""},
        errors: {}
     }

     
  schema = {
    username: Joi.string().email().label("Username"),
    password: Joi.string().min(8).required().label("Password"),
    name: Joi.string().required().label("Name")
  };

  doSubmit = async () => {
    const {data} = this.state;
    await API.createUser({
      email: data.username,
      password: data.password,
      name: data.name

    });
  }
    render() { 
        return ( 
            <div>
            <h1>Sign Up</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Sign Up")}
            </form>
          </div>
         );
    }
}
 
export default SignUp;