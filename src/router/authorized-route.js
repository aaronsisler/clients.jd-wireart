import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import AuthorizationContainer from "../containers/authorization-container";

const AuthorizedRoute = ({ isAuthorized, component: Component, ...props }) => (
  <Route
    {...props}
    component={newProps =>
      isAuthorized ? <Component {...newProps} /> : <AuthorizationContainer />
    }
  />
);

const mapStateToProps = state => ({
  isAuthorized: state.user && !!state.user.isAuthorized
});

export default connect(mapStateToProps)(AuthorizedRoute);

AuthorizedRoute.propTypes = {
  component: PropTypes.func,
  isAuthorized: PropTypes.bool
};
