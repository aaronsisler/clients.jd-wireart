import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import "./notification-bar.scss";

const NotificationBar = ({ notification, startClearNotification }) => (
  <div className="notification-bar">
    <div className="notification-bar__text">{notification}</div>
    <div className="notification-bar__clear" onClick={startClearNotification}>
      <FontAwesomeIcon className="notification-bar__icon" icon={faTimes} />
    </div>
  </div>
);

NotificationBar.propTypes = {
  notification: PropTypes.string,
  startClearNotification: PropTypes.func.isRequired
};

export default NotificationBar;
