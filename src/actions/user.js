import database from "../firebase";
import { clearUser, setUser } from "./helpers/user";

export const startClearUser = () => dispatch => dispatch(clearUser());

export const startSetUser = () => async (dispatch, getState) => {
  try {
    const { uid: userId } = getState().auth;
    const snapshot = await database.ref(`users/${userId}`).once("value");

    return dispatch(
      setUser({
        userId: snapshot.key,
        ...snapshot.val()
      })
    );
  } catch (error) {
    throw error;
  }
};
