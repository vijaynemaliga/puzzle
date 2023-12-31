import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {auth } from '../firebase';
import { useState,useEffect,useContext } from "react";
const userAuthContext= createContext();

export function UserContextprovider({children}){

    const[user,setUser]=useState("");
    function signUp(email,password){
       return createUserWithEmailAndPassword(auth,email,password);
    }
    function logIn(email,password){
      return signInWithEmailAndPassword(auth,email,password);
    }
       useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
               setUser(currentUser)
         })
          return ()=>{
            unsubscribe()
          }
       },[]);
    return(
        <userAuthContext.Provider value={{user,signUp,logIn}}>
            {children}
        </userAuthContext.Provider>
    )
}
 
export function useUserAuth(){
    return useContext(userAuthContext)
}