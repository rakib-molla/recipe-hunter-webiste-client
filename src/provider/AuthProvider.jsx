import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser =(name, email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginEmailAndPassword = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubProvider = new GithubAuthProvider();
    const signInWithGithub = ()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (loggedInUser) =>{
            setUser(loggedInUser);
            setLoading(false);
        })
        return()=>{
            unSubscribe();
        }
    },[])

    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        registerUser,
        loginEmailAndPassword,
        signInWithGoogle,
        signInWithGithub,
        logOut,
    };
    return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>);
};

export default AuthProvider;