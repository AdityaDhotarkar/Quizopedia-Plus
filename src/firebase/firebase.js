import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA3sDGxsg4S2pVzS_AvV5tSSyfmKmoCM-0",
  authDomain: "quizdom-d7290.firebaseapp.com",
  projectId: "quizdom-d7290",
  storageBucket: "quizdom-d7290.appspot.com",
  messagingSenderId: "620854798182",
  appId: "1:620854798182:web:bf0c9784dd3c1ac6a5caa7",
  // measurementId: "${config.measurementId}"
  };
  
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()

export default firebase;