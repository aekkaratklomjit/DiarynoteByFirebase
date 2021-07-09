import * as firebase from 'firebase'
import firestore from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "-",
  authDomain: "-",
  databaseURL: "-",
  projectId: "-",
  storageBucket: "-",
  messagingSenderId: "-",
  appId: "-6",
  measurementId: "-"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({experimentalForceLongPolling: true});

  export default firebase
