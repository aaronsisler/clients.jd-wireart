import { clearNotification, setNotification } from "./helpers/notification";

const timeoutLengthInMilliseconds = 5000;

export const startClearNotification = () => dispatch =>
  dispatch(clearNotification());

export const startSetNotification = notification => dispatch => {
  dispatch(setNotification(notification));
  return setTimeout(
    () => dispatch(clearNotification()),
    timeoutLengthInMilliseconds
  );
};
