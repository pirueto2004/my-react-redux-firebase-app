import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCKT7HxG-edPqfZ-MYKq2hbs235_8RFtSQ",
    authDomain: "react-redux-firebase-app-dba38.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-app-dba38.firebaseio.com",
    projectId: "react-redux-firebase-app-dba38",
    storageBucket: "",
    messagingSenderId: "417928985565",
    appId: "1:417928985565:web:dc5403dd7a281ada58d434"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({timestampsInSnapshots: true});
  firebase.firestore().settings({});

  

  export default firebase;