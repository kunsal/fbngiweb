import React, { Component } from "react";
import { Link } from "react-router-dom";
import userService from "../services/user-service";
import { Helmet } from 'react-helmet';
import Logo from "./common/Logo";
import redirectIfLoggedIn from "../middlewares/redirect-if-logged-in";
import Alert from "./common/Alert";

class Login extends Component {
  state = {
    hasError: false,
    message: "",
    email: "",
    password: "",
    loading: false
  };

  componentDidUpdate() {
    redirectIfLoggedIn(this.props);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = async () => {
    const { email, password } = this.state;
    if (email == "") {
      this.setState({ hasError: true, message: "Email is required" });
    } else if (password == "") {
      this.setState({ hasError: true, message: "Password is required" });
    } else {
      this.setState({ hasError: false, message: "", loading: true });
      const response = await userService.login(email, password);
      if (response.hasOwnProperty("error")) {
        this.setState({ hasError: true, message: response.error, loading: false });
      } else {
        this.setState({ hasError: false, message: "Logged in successfully", loading: false });
      }
    }
  };

  render() {
    const { hasError, message, email, password, loading } = this.state;
    let messageClasses = "alert";
    if (hasError) messageClasses += " alert-danger";
    if (!hasError && message !== "") messageClasses += " alert-success";

    return (
      <React.Fragment>
        <Helmet>
          <title>Login</title>
        </Helmet>

        <div className="row wrapper">
          <div className="col-md-12 text-center">
            <Link to='/'>
              <Logo width={200}/>
            </Link>
          </div>
          <div className="col-md-12 form-wrapper">
            <h2 className="page-title">Login</h2>
            <Alert messageclasses={messageClasses} message={message} />
            <div className="form-group my-2">
              <label htmlFor="email" className="control-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="password" className="control-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <button
              className="btn btn-primary submit my-2"
              onClick={this.handleLogin}
              disabled={loading ? true : false}
            >
              {loading ? '...' : 'Login'}
            </button>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default Login;
