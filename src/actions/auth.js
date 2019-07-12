import { auth, googleAuthProvider } from "../firebase";
import { clearAuth, setAuth } from "./helpers";
import history from "../tools/history";

export const startClearAuth = () => dispatch => dispatch(clearAuth());

export const startLogin = () => () => auth.signInWithPopup(googleAuthProvider);

export const startLogout = () => () =>
  auth.signOut().then(() => history.push("/logged_out"));

export const startSetAuth = userId => dispatch => dispatch(setAuth(userId));
