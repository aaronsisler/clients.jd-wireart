import * as firebase from "firebase";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const { auth, storage } = firebase;

export { database as default, auth, googleAuthProvider, storage };
