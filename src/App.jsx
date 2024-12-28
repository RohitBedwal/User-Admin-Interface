import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
// import Bubbles from './components/other/Bubbles'
import AllTask from './components/other/AllTask'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  useEffect(()=>{
    setLocalStorage(),getLocalStorage()

  },)
  

  const [user,setUser]=useState(null);
  const [loggedInUserData,setLoggedInUserData]=useState(null)
  const [userData,setUserData] =useContext(AuthContext);
  // console.log(authData.employees)
  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser');
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const loginHandler=(email,password)=>{
      if(email=="r@me.com" && password == 123){
        setUser("admin")
        localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
      }
      else if(userData  )
      {
       const employee=userData.find((e)=>email==e.email && password==e.password)
       if(employee){
        setLoggedInUserData(employee)
         setUser("employee")
         localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}))
       }
      }

      else{
        alert("this is not one ")

      }
  }

// loginHandler("r@me.com","123")
  return (
    <>
    {
      !user ? <Login loginHandler={loginHandler} />: " "
    }
    {
      user=="admin" ? <AdminDashboard changeUser={setUser} />:(user == "employee"?<EmployeeDashboard changeUser={setUser}  data ={loggedInUserData}/>  :null)
    }
    {/* <EmployeeDashboard/> */}
   
    {/* <AdminDashboard />
    <AllTask/> */}
   
    
    
    </>
  )
}

export default App