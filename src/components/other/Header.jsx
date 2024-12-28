import React, { useState } from 'react'

const Header = (props) => {
  const[username,setUsername]=useState('');

  const logOutUser=()=>{
    localStorage.setItem('loggedInUser','')
     props.changeUser('')
    
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl font-medium'>Hello,<br /> <span className='text-4xl '>👋</span>  </h1> 
        <button onClick={logOutUser} className='bg-red-500 px-3 rounded  py-1'>Log Out</button>
    </div>
  )
}

export default Header 