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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // in order to add all of our collections to firebase, we need to create a new collection and make a reference from it
  // to get the collection reference object, which we can then call the CRUD operations on
  // we call this from app.js to ensure it only gets called once
  const collectionRef = firestore.collection(collectionKey);
  // we will send all the data to the server as one batch so if we are transferring data and the internet stops midway, the whole thing will fail and
  // we will not run into any unpredictable data errors later on with missing pieces of the data
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    // for each object, we will tell the new collection reference object to create a new document reference in this collection and randomly generate an id for it
    const newDocRef = collectionRef.doc();
    // do batch.set instead of doing newDocRef.set(obj) to batch all of them together
    batch.set(newDocRef, obj);
  });
  // this will return a promise to check if the entire batch call has succeeded or fail
  return await batch.commit();
};

// takes in the querySnapshot from our query to the server for collections and converts the collections to a map of the data
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  // acumulator is just a temporary variable as an empty array which will set the key of the current collection as the collection
  // ex. Hats (key) = Hats collection
  // return accumulator and reset accumulator to {}
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
