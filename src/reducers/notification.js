const notificationReducerDefaultState = undefined;

const notificationReducer = (
  state = notificationReducerDefaultState,
  action
) => {
  switch (action.type) {
    case "CLEAR_NOTIFICATION":
      return undefined;
    case "SET_NOTIFICATION":
      return action.notification;
    default:
      return state;
  }
};

export default notificationReducer;
