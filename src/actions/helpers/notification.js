export const clearNotification = () => ({
  type: "CLEAR_NOTIFICATION"
});

export const setErrorNotification = notification => ({
  type: "SET_ERROR_NOTIFICATION",
  payload: notification
});

export const setSuccessNotification = notification => ({
  type: "SET_SUCCESS_NOTIFICATION",
  payload: notification
});
