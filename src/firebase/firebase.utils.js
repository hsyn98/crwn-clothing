import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB9iPMV_aPJm8XBtlkDfhuMD_tSI0LqK8I",
  authDomain: "crown-db-d07f5.firebaseapp.com",
  databaseURL: "https://crown-db-d07f5.firebaseio.com",
  projectId: "crown-db-d07f5",
  storageBucket: "crown-db-d07f5.appspot.com",
  messagingSenderId: "215329267474",
  appId: "1:215329267474:web:e86807b3b5ae2f68fc9dcb",
  measurementId: "G-06KYMBW9YJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
