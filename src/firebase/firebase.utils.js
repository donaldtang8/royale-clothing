import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAzJFq9tRWwUae6zyo2-Eu1yxoABEhfIYo",
  authDomain: "crown-db-8a9c4.firebaseapp.com",
  databaseURL: "https://crown-db-8a9c4.firebaseio.com",
  projectId: "crown-db-8a9c4",
  storageBucket: "crown-db-8a9c4.appspot.com",
  messagingSenderId: "398708010346",
  appId: "1:398708010346:web:5b39140f1e7617848a0913",
  measurementId: "G-094XSEPYHC"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // any CRUD method (get, set, update, delete) must be performed on the ref document
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // snapchat is an object we get from the reference object using the get() method from the document
  const snapShot = await userRef.get();
  // if this user does not exist in our database, create a new user in the database
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
