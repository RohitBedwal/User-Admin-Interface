import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-3 bg-blue-400 rounded-lg'>
    <div className='flex justify-between '>
      <p className='border-2 border-red-500 bg-red-500 p-1 rounded text-sm'>
        {data.category}
      </p>
      <p className='font-bold'>
      {data.taskDate}
      </p>
    </div>
    <h2 className='mt-5 text-2xl font-bold font-serif'>
       {data.taskTitle}
    </h2>
    <p className='mt-5'>
      {data.taskDescription}
    </p>
    <div className='flex justify-between mt-5'>
    <button className='border  border-green-400 bg-green-400 px-1 rounded'>Mark completed</button>
    <button className='border border-red-400 bg-red-400 px-1 rounded'>Mark failed</button>

    </div>

</div>
  )
}

export default AcceptTask