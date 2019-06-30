import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startClearNotification } from "../../actions";
import NotificationBar from "../../components/notification-bar/notification-bar";
import "./notification-container.scss";

const NotificationContainer = ({
  isError,
  notification,
  startClearNotification
}) => {
  return (
    notification && (
      <div className="notification-container">
        <NotificationBar
          isError={isError}
          notification={notification}
          startClearNotification={startClearNotification}
        />
      </div>
    )
  );
};

const mapStateToProps = state => ({
  isError: state.notification.isError,
  notification: state.notification.message
});

const mapDispatchToProps = dispatch => ({
  startClearNotification: () => dispatch(startClearNotification())
});

NotificationContainer.propTypes = {
  isError: PropTypes.bool,
  notification: PropTypes.string,
  startClearNotification: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationContainer);
