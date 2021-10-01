import firebase from "firebase";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDeweTU1gF1q2xneKE0aROC2z298GQPJR0",
  authDomain: "test-3791a.firebaseapp.com",
  projectId: "test-3791a",
  storageBucket: "test-3791a.appspot.com",
  messagingSenderId: "439179500093",
  appId: "1:439179500093:web:5dd0755c1502235227a854",
  measurementId: "G-KT17HLX30W"
};
  // Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;