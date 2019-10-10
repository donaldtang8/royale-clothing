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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
