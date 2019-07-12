import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoginContainer from "../login-container";
import "./authorization-container.scss";

const AuthorizationContainer = ({ isAuthenticated }) =>
  isAuthenticated ? (
    <div className="authorization-container">
      <div className="authorization-container__content">
        <div className="authorization-container__content-text">
          You are not authorized to be here.
        </div>
        <div className="authorization-container__content-image">
          <img
            src="/images/site/magic_word.gif"
            alt="You are not permitted to be here! Fly you fool!"
          />
        </div>
      </div>
    </div>
  ) : (
    <LoginContainer />
  );

const mapStateToProps = state => ({
  isAuthenticated: !!state.user
});

AuthorizationContainer.propTypes = {
  isAuthenticated: PropTypes.bool
};

export default connect(mapStateToProps)(AuthorizationContainer);
