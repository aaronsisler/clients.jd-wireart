import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { startClearNotification, startSetNotification } from "../../actions";
import NotificationBar from "../../components/notification-bar/notification-bar";
import "./notification-container.scss";

const NotificationContainer = ({
  notification,
  startClearNotification,
  startSetNotification
}) => {
  return (
    notification && (
      <div className="notification-container">
        <NotificationBar
          notification={notification}
          startClearNotification={startClearNotification}
          startSetNotification={startSetNotification}
        />
      </div>
    )
  );
};

const mapStateToProps = state => ({
  notification: state.notification
});

const mapDispatchToProps = dispatch => ({
  startClearNotification: () => dispatch(startClearNotification()),
  startSetNotification: notification =>
    dispatch(startSetNotification(notification))
});

NotificationContainer.propTypes = {
  notification: PropTypes.string,
  startClearNotification: PropTypes.func.isRequired,
  startSetNotification: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationContainer);
