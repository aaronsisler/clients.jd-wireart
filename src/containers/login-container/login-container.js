import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startLogin } from "../../actions";
import "./login-container.scss";

const LoginContainer = ({ startLogin }) => (
  <div className="login-container">
    <div className="login-container__button">
      <button onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

LoginContainer.propTypes = {
  startLogin: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(LoginContainer);
