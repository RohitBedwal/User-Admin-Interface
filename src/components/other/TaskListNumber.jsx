import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex  justify-between mt-10 gap-x-5'>
        <div className=' p-5 h-40 w-[45%] bg-blue-400  rounded-lg'>
        <h1 className=' font-extrabold text-4xl'>{data.taskCounts.active}</h1>
        <h2 className=' font-medium text-xl'>Accepted Task</h2>
        </div>
        <div className=' p-5 h-40 w-[45%] bg-green-400  rounded-lg'>
        <h1 className=' font-extrabold text-4xl'>{data.taskCounts.completed}</h1>
        <h2 className=' font-medium text-xl'>Completed Task</h2>
        </div>
        <div className=' p-5 h-40 w-[45%] bg-yellow-400  rounded-lg'>
        <h1 className=' font-extrabold text-4xl'>{data.taskCounts.newTask}</h1>
        <h2 className=' font-medium text-xl'>New Task</h2>
        </div>
        
        <div className=' p-5 h-40 w-[45%] bg-red-400  rounded-lg'>
        <h1 className=' font-extrabold text-4xl'>{data.taskCounts.failed}</h1>
        <h2 className=' font-medium text-xl'>Failed Task</h2>
        </div>
        
    </div>
  )
}

export default TaskListNumber