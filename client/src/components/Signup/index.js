import React, { useEffect } from "react";
import { FormGroup, Label, Input, Button, Form } from "reactstrap";
import { Link } from "react-router-dom";

const Signup = (props) => {

    useEffect(() => {
      console.log('props', props)
    }, [props])

    return (
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
              value={props.email}
              onChange={props.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={props.password}
              onChange={props.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              value={props.username}
              onChange={props.handleInputChange}
            />
          </FormGroup>
          <Button onClick={e => { 
            e.preventDefault() 
          props.handleSignup(e)
          } 
          }>Signup</Button>
          <p>
            <Link to="/login">Already have an account? Log in here</Link>
          </p>
        </Form>
      </div>
    );
}


export default Signup;
