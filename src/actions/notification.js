import { clearNotification, setNotification } from "./helpers/notification";

export const startClearNotification = () => dispatch =>
  dispatch(clearNotification());

export const startSetNotification = notification => dispatch => {
  dispatch(setNotification(notification));
  setTimeout(() => dispatch(clearNotification()), 5000);
};
