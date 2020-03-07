import React from "react";
import {Link} from "react-router-dom"; 
import { UserConsumer } from "../context";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";

const Login = () => {
  return (
    <UserConsumer>
      {({ data, inputChange, handleLogin }) => (
        <div>
          <h2>Login</h2>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
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
            <Button onClick={e => handleLogin(e)}>
              Login
            </Button>
            <p className="signupLink">
              <Link to="/signup">Don't have an account? Sign up here</Link>
            </p>
          </Form>
        </div>
      )}
    </UserConsumer>
  );
}

export default Login;
