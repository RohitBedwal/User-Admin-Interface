import React, { useContext, useState } from 'react'
import Header from '../other/Header'
import AllTask from '../other/AllTask'
import { AuthContext } from '../../context/AuthProvider'
import CreateTask from '../other/CreateTask'
// import { motion } from "motion/react"

function AdminDashboard(props) {
    const [taskTitle,setTaskTitle]=useState('')
    const [taskDescription,setTaskDescription]=useState('')
    const [taskDate,setTaskDate]=useState('')
    const [asignTo,setAsignTo]=useState('')
    const [category,setCategory]=useState('')

    const [newTask,setNewTask]=useState({});
    const [userData,setUserData] = useContext(AuthContext)


    const submitHandler=(e)=>{
        e.preventDefault();
        setNewTask({taskDate,taskDescription,taskTitle,category,active:false,newTask:true,failed:false,completed:false})
    // const data = JSON.parse(localStorage.getItem('employees'))
    const data = userData
        data.forEach(function(elem){

            if(elem.firstName==asignTo){
                elem.tasks.push(newTask)
                console.log(elem)
            }
        })
        setUserData(data);
        console.log(data);    
        
        setTaskDate('')
        setTaskDescription('')
        setTaskTitle('')
        setAsignTo('')
        setCategory('')
    }
  return (
    <div className='h-screen p-10'>
        <Header changeUser={props.changeUser}/>
        
        <CreateTask/>
        <AllTask/>

    </div>
  )
}

export default AdminDashboard