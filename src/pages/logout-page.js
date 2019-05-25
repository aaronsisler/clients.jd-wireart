import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startLogout } from "../actions";

const LogoutPage = props => (
  <main className="logout-page">
    <button className="button" onClick={props.startLogout}>
      Logout
    </button>
  </main>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LogoutPage);

LogoutPage.propTypes = {
  startLogout: PropTypes.func.isRequired
};
