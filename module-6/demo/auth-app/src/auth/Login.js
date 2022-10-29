import React from 'react';

import {When} from 'react-if';

import {LoginContext} from "./context.js";

class Login extends React.Component {

  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }

  handleChange = (e) => {
    this.setState( { [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <>
        <When condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </When>
        <When condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="username"
              name="username"
              onChange={this.handleChange}/>
            <input
              placeholder="password"
              name="password"
              type="password"
              onChange={this.handleChange} />
            <button type="submit">Log In</button>
          </form>
        </When>
      </>
    )
  }

}

export default Login;
