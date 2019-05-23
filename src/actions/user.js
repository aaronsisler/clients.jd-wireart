import database from "../firebase";
import { clearUser, setUser } from "./helpers/user";

export const startClearUser = () => dispatch => dispatch(clearUser());

export const startSetUser = () => (dispatch, getState) => {
  const { uid: userId } = getState().auth;

  return database
    .ref(`users/${userId}`)
    .once("value")
    .then(snapshot =>
      dispatch(
        setUser({
          userId: snapshot.key,
          ...snapshot.val()
        })
      )
    );
};
