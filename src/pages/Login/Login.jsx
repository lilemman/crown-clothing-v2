import React from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Log In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default Login;
