import React from 'react';
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';


export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user)

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // update user
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    // signIn user
    const signIn = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)

    }
    // google logIn
    const googleLogin = () => {
        setLoading(true)

        return signInWithPopup(auth, googleProvider)

    }


    // logout
    const logout = () => {
        // setUser(null)
        signOut(auth)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // if (user && !user.displayName) {
            //     return
            // }
            if (user) {
                setUser(user);
                setLoading(false)

            }
            else {
                setUser(null);
                setLoading(false)

            }
        });
        return () => unsubscribe()
    }, [])


    const allValues = { createUser, signIn, googleLogin, logout, user, loading, updateUserProfile };
    return (
        <AuthContext.Provider value={allValues}>


            {children}


        </AuthContext.Provider>
    );
};

export default AuthProvider;