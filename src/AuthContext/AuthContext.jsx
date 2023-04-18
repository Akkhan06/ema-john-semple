import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'

export const AuthUser = createContext(null)
const auth = getAuth(app)
const AuthContext = ({children}) => {
    
    const [user, setUser] = useState(null)

    // ========VARY IMPROTENT THIS STATE, ITS A LOCATION TARGER LODDER TO PRIVATEROUTER======
    const [lodding, setLodding] = useState(true)

    const createUser = (email, password) => {
        // ==========MUST BE USED TO CREATE ACCOUTN==========
        setLodding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        // ==========MUST BE USED TO LOGIN ACCOUTN==========
        setLodding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

   useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        // ==========MUST BE USED TO DON'T RETUREN LOGIN PAGE==========
        setLodding(false)
    })
    return () => unsubscrive()
   }, [])

   const logOut = () => {
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
 }



    const userInfo = {
        user,
        createUser,
        loginUser,
        logOut,
        lodding
    }

    return (
        <div>
            <AuthUser.Provider value={userInfo}>
                {children}
            </AuthUser.Provider>
        </div>
    );
};

export default AuthContext;