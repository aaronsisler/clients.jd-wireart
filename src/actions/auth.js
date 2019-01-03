import { firebase, googleAuthProvider } from 'Firebase/firebase';
import history from 'Tools/history';

export const startLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

export const startLogout = () => () => firebase.auth().signOut()
    .then(() => history.push('/logged_out'));
