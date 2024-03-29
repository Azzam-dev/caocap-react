import React,{useContext,useState,useEffect} from 'react'
import {auth} from '../firebase'

const authContext = React.createContext()

export function useAuth(){
return useContext(authContext)
}

export function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState()
    const [loading , setLoading] = useState(true)

        function SignUp(email, password){
           return auth.createUserWithEmailAndPassword(email, password)

        }
        function login(email, password){
           return auth.signInWithEmailAndPassword(email, password)
        }
        useEffect(() => {
          const unsubscribe =  auth.onAuthStateChanged(user => {
                setCurrentUser(user)
                setLoading(false)
            })
            return unsubscribe
        },[])
       

        const value ={
            currentUser
            ,SignUp,
            login
        }


    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    )
}
