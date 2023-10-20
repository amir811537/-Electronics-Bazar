import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

 export const AuthContext=createContext(null);
 
const auth = getAuth(app);



const Authprovider = ({children}) => {

    const googleProvider= new GoogleAuthProvider();
    const googleSignin=(value)=>{
        return signInWithPopup(auth,googleProvider);
       }

    const [user,setuser]=useState(null);



    const signuprg =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
      }

const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const logOut =()=>{
    return signOut(auth);
}



useEffect(()=>{
 const unsubcribe=   onAuthStateChanged(auth,currentuser =>{
        console.log('user in the auth state changed', currentuser);
        setuser(currentuser)
    });
    return ()=>{
        unsubcribe();
    }
},[])

const authinfo ={
    user,createUser,logOut,signuprg,googleSignin
}

    return (
       <AuthContext.Provider value={authinfo}>

{children}
       </AuthContext.Provider>
    );
};

export default Authprovider;