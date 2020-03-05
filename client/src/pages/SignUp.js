import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import { Link } from "react-router-dom";

class Signup extends Component {
    state = {
        email: "",
        password: false,
        name: false
    }

   handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h2>Signup</h2>
                <Form>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" placeholder="Name" value={this.props.name} onChange={this.props.handleInputChange} valid={this.state.valiedName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="email@email.com" value={this.props.email} onChange={this.props.handleInputChange} valid={this.state.valieEmail} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="password" value={this.props.password} onChange={this.props.handleInputChange} valid={this.state.validPassword} />
                        <FormText>{this.state.passwordMessage}</FormText>
                    </FormGroup>
                    {/* if all fields are valid, allow the user to submit the form */}
                    {(this.state.valiedName && this.state.validLastname && this.state.valieEmail && this.state.validUsername && this.state.validPassword && this.state.confirmPassword) ? (
                        <Button onClick={this.props.handleSignup} color="success" block>Signup</Button>
                    ) : (
                        <Button onClick={this.props.handleSignup} color="danger" block disabled>Signup</Button>
                    )}
                    <p className="signupLink">
                        <Link to="/login">Already have an account?  Sign in here</Link>
                    </p>
                </Form>
            </div>
        );
    }
}

export default Signup;