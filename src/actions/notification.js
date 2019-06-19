import { clearNotification, setNotification } from "./helpers/notification";

export const startClearNotification = () => dispatch =>
  dispatch(clearNotification());

export const startSetUser = notification => dispatch =>
  dispatch(setNotification(notification));
