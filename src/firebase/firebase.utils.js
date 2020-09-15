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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
