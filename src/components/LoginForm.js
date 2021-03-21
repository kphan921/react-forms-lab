import React from "react";

class LoginForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handleNameChange = (e) => {
    this.setState({username: e.target.value})
  }

  handlePassChange = (e) => {
    this.setState({password: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state) 
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleNameChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handlePassChange} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
