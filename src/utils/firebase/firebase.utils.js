import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getDoc, setDoc, getFirestore, doc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDgSENTgJRcqmhDncDlYhZWF7a7_UNYAuQ",
  authDomain: "crown-clothing-v2-37c65.firebaseapp.com",
  projectId: "crown-clothing-v2-37c65",
  storageBucket: "crown-clothing-v2-37c65.appspot.com",
  messagingSenderId: "251853036333",
  appId: "1:251853036333:web:1aebcfbf922a7b264751a4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //if user data does not exist
  //create /set the doc with the data from userAuthin my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  //if user data exists
  return userDocRef;
};
