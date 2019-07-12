import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import "./notification-bar.scss";

const NotificationBar = ({ isError, notification, startClearNotification }) => (
  <div
    className={`notification-bar ${isError ? "notification-bar--error" : ""}`}
  >
    <div className="notification-bar__text">{notification}</div>
    <div className="notification-bar__clear" onClick={startClearNotification}>
      <FontAwesomeIcon className="notification-bar__icon" icon={faTimes} />
    </div>
  </div>
);

NotificationBar.propTypes = {
  isError: PropTypes.bool,
  notification: PropTypes.string.isRequired,
  startClearNotification: PropTypes.func.isRequired
};

export default NotificationBar;
