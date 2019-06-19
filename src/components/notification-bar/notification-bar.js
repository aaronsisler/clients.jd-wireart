import React from "react";
import PropTypes from "prop-types";
import "./notification-bar.scss";

const NotificationBar = ({
  notification,
  startClearNotification,
  startSetNotification
}) => (
  <div className="notification-bar">
    <div className="notification-bar__text">{notification}</div>
    <div className="notification-bar__set" onClick={startSetNotification}>
      Set
    </div>
    <div className="notification-bar__clear" onClick={startClearNotification}>
      Clear
    </div>
  </div>
);

NotificationBar.propTypes = {
  notification: PropTypes.string,
  startClearNotification: PropTypes.func.isRequired,
  startSetNotification: PropTypes.func.isRequired
};

export default NotificationBar;
