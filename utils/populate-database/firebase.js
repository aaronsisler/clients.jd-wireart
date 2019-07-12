const firebase = require("firebase/app");
require("firebase/database");
const { firebaseConfig } = require("./firebase-config");

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

exports.database = database;
