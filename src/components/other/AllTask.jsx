import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = ({}) => {
  const [userData,setUserData]=useContext(AuthContext)
  
  return (
    <div className=' rounded bg-[#1c1c1c] h-64  mx-10  '>
      <div className='flex justify-between mb-2 rounded py-5 px-10 bg-gray-400 '>
          <h1 className='w-1/5 text-white'>Employee Name</h1>
          <h2 className='w-1/5 text- white'> Active Task</h2>
          <h3 className='w-1/5 text-white'>New Task</h3>
          <h3 className='w-1/5 text-white'>Completed Task</h3>
          <h3 className='w-1/5 text-white'>Failed task </h3>
        </div>
      <div className='h-[80%] overflow-auto'>
      {userData.map(function(elem,idx){
        return (
        <div key={idx} className='flex justify-between mb-2 rounded py-5 px-10 bg-1c1c1c-400 '>
          <h1 className='w-1/5 text-gray-400'>{elem.firstName}</h1>
          <h3 className='w-1/5 text-blue-400'>{elem.taskCounts.active}</h3>
          <h3 className='w-1/5 text-yellow-400'>{elem.taskCounts.newTask}</h3>
          <h3 className='w-1/5 text-green-400'>{elem.taskCounts.completed}</h3>
          <h3 className='w-1/5 text-red-400'>{elem.taskCounts.failed}</h3>
        </div>
        )
      })}
      </div>
        
        
        
    </div>
  )
}

export default AllTask