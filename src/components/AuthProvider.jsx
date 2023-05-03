/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const gitHubProvider = new GithubAuthProvider();

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserDetails = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("user updated");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    registerUser,
    handleGoogleSignIn,
    user,
    handleGitHubSignIn,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
