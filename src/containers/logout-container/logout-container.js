import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startLogout } from "../../actions";
import "./logout-container.scss";

const LogoutContainer = ({ startLogout }) => (
  <div className="logout-container">
    <div className="logout-container__button">
      <button onClick={startLogout}>Logout</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

LogoutContainer.propTypes = {
  startLogout: PropTypes.func.isRequired
};

export default connect(
  undefined,
  mapDispatchToProps
)(LogoutContainer);
