
import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
// import { div } from 'motion/react-client';


export const  AuthContext= createContext();
const AuthProvider = ({children}) => {

   const [userData,setUserData]=useState(null);
   useEffect(()=>{
   setLocalStorage()
    const {employees}=getLocalStorage()
    setUserData(employees)
    
   //  console.log(userData)
   },[]) 
   
  return (
     <div>
         <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>

     </div>
     
   
  )
}

export default AuthProvider