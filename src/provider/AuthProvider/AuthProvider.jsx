import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth =getAuth(app) ;
//google login
const provider = new GoogleAuthProvider();
//Github login
const providers = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    //user
    const [user, setUser] = useState(null);

    //google login
     const GoogleSignIn = () =>{
         return signInWithPopup(auth, provider);
         
     }
     //Github login
     const GithubLogin = ()=>{
         return signInWithPopup(auth, providers)
        
     }
    //createduser
    const createUser = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)   
     }
    ///login user
    const signIn = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password);    
     }
    ///updated profilename and photourl
     const updateUserData = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
     }
        //logout
        const logOut= ()=>{
            return signOut(auth)
         }
    
       //login or Logout
         useEffect(()=>{
          const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
            console.log('logged in user inside auth obbser', loggedUser)
            setUser(loggedUser)         
          })
    
          return ()=>{unsubscribe();}
    
         },[])

    const authInfo={
        user,
        logOut,
        createUser,
        signIn,
        updateUserData,
        GoogleSignIn,
        GithubLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;