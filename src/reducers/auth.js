export default (state = {}, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return {
        uid: action.uid
      };
    case "CLEAR_AUTH":
      return {};
    default:
      return state;
  }
};
