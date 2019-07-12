const notificationReducerDefaultState = { isError: false, message: "" };

const notificationReducer = (
  state = notificationReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "CLEAR_NOTIFICATION":
      return notificationReducerDefaultState;
    case "SET_ERROR_NOTIFICATION":
      return { isError: true, message: action.payload };
    case "SET_SUCCESS_NOTIFICATION":
      return { isError: false, message: action.payload };
    default:
      return state;
  }
};

export default notificationReducer;
