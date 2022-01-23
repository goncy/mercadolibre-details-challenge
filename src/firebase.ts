import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4KDav4xgJVO73KOF4Kl525VJI4PqPc5U",
  authDomain: "meli-challenge-83230.firebaseapp.com",
  projectId: "meli-challenge-83230",
  storageBucket: "meli-challenge-83230.appspot.com",
  messagingSenderId: "899995987217",
  appId: "1:899995987217:web:dbe5a8e537b174084e70b0",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db};
export default firebase;
