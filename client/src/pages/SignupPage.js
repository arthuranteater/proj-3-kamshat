import React from "react";
import { UserConsumer } from '../context';
import Signup from "../components/Signup/index"
import { FormGroup, Label, Input, Button, Form } from "reactstrap";
import { Link } from "react-router-dom";


const SignupPage = () => {
  return (
    <UserConsumer>
      {({ data, inputChange, handleSignup }) => (
        <div>
        <h2>Signup</h2>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              value={data.email}
              onChange={inputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={data.password}
              onChange={inputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={data.username}
              onChange={inputChange}
            />
          </FormGroup>
          <Button onClick={e => { 
            e.preventDefault() 
            handleSignup(e)
          } 
          }>Signup</Button>
          <p>
            <Link to="/login">Already have an account? Log in here</Link>
          </p>
        </Form>
      </div>
      )}  
    </UserConsumer>
  );
}


export default SignupPage;