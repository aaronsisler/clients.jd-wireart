import {
  clearNotification,
  setErrorNotification,
  setSuccessNotification
} from "./helpers/notification";

const timeoutLengthInMilliseconds = 3000;

export const startClearNotification = () => dispatch =>
  dispatch(clearNotification());

export const startSetErrorNotification = notification => dispatch => {
  dispatch(setErrorNotification(notification));

  return setTimeout(
    () => dispatch(clearNotification()),
    timeoutLengthInMilliseconds
  );
};

export const startSetSuccessNotification = notification => dispatch => {
  dispatch(setSuccessNotification(notification));

  return setTimeout(
    () => dispatch(clearNotification()),
    timeoutLengthInMilliseconds
  );
};
