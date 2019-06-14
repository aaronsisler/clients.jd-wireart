import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import { firebaseConfig } from "../config";

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { database as default, auth, googleAuthProvider, storage };
