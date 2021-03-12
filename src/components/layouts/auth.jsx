import React, { Component } from "react";
import { Container } from "react-bootstrap";
import redirectIfLoggedIn from "../../middlewares/redirect-if-logged-in";
import { Helmet } from "react-helmet";
class AuthLayout extends Component {
  state = {};

  componentDidMount() {
    redirectIfLoggedIn(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <style type="text/css">
            {`
              html, body {
                height: 100%;
                
              }
              body {
                background-color: #e0ad0f;
              }

              .main-container {
                display: flex !important;
                justify-content: center;
                align-items: center;
                height: 100%;
              }

              .wrapper {
                background-color: #fcfcfc;
                margin-top: 20vh;
                padding: 20px;
                border-radius: 15px;
                box-shadow: 10px 10px 20px 10px #999; 
                width: 50%;
                min-height: 400px;
              }

              .centralize {
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .form-wrapper {
                display: flex;
                flex-direction: column;
                align-items: space-around
              }

              .page-title {
                font-size: 22px;
                letter-spacing: 2px;
              }
            `}
          </style>
        </Helmet>

        <div className="main-container">
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default AuthLayout;
