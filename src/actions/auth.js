import { auth, googleAuthProvider } from "../firebase";
import history from "../tools/history";

export const startLogin = () => () =>
  auth().signInWithPopup(googleAuthProvider);

export const startLogout = () => () =>
  auth()
    .signOut()
    .then(() => history.push("/logged_out"));
