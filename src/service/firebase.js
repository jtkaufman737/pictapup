import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBWL7Ye5fsk6xOhmr45mHwGP2A0dmFVUSI",
  authDomain: "pictapup.firebaseapp.com",
  databaseURL: "https://pictapup.firebaseio.com",
  projectId: "pictapup",
  storageBucket: "pictapup.appspot.com",
  messagingSenderId: "38616790344"
};

let app = firebase.initializeApp(config);
let db = app.database();
let dogs = db.ref('dogs');


export default {
  database:firebase.database(),
  dogs: dogs
}
