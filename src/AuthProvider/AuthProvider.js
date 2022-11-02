import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);

      const googleSignIn = (provider) => {
            return signInWithPopup(auth, provider);
      }
      const githubSignIn = (provider) => {
            return signInWithPopup(auth, provider);
      }

      const createUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password);
      }

      const signIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
      }
      const updateUserProfile = (profile) => {
            return updateProfile(auth.currentUser, profile);
      }

      const logOut = () => {
            return signOut(auth);
      }

      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser);
            });
            return () => unsubscribe();
      }, [])

      const authInfo = { user, googleSignIn, githubSignIn, createUser, signIn, updateUserProfile, logOut }
      return (
            <div>
                  <AuthContext.Provider value={authInfo}>
                        {children}
                  </AuthContext.Provider>
            </div>
      );
};

export default AuthProvider;