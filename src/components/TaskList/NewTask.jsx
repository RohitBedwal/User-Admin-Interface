import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-3 bg-yellow-400 rounded-lg'>
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
    <div className='mt-5 text-center'>
        <button className='border  border-blue-500 py-1 bg-blue-500 px-10 rounded'>Accept Task</button>
    </div>

</div>
  )
}

export default NewTask