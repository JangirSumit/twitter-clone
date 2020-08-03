import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <form className="container">
        <h1>Login</h1>
        <br />
        <div className="form-group">
          <label for="exampleInputEmail1">Email Id</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <small id="emailHelp" className="form-text text-muted">
            Please keep strong password.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
