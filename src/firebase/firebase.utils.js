import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCDit2dTHbpr8uhJoXObtixPwSmDzscIYs",
  authDomain: "crown-db-9c98b.firebaseapp.com",
  projectId: "crown-db-9c98b",
  storageBucket: "crown-db-9c98b.appspot.com",
  messagingSenderId: "42447576338",
  appId: "1:42447576338:web:283dcbcb6cb1e61d88a7cb",
  measurementId: "G-5WFZP3QK25",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
};

export default firebase;
