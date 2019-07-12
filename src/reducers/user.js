const userReducerDefaultState = null;

const userReducer = (state = userReducerDefaultState, action) => {
  switch (action.type) {
    case "CLEAR_USER":
      return null;
    case "SET_USER":
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
