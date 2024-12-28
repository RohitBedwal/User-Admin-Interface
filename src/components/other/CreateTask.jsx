import React from 'react'

const CreateTask = () => {
  return (
    <div>
         <div className=' py-10 rounded-l mb-4 bg-[#1c1c1c] mt-4'>
            <form className='  flex gap-x-4  justify-between p-10  ' onSubmit={(e)=>{submitHandler(e)}}>
                <div className=' px-2   w-[500px] h-[450px] rounded-md pt-4 pb-4 '>
                    <div className=''>
                        <h3 className='font-serif text-4xl text-blue-400 font-bold'></h3>
                        <input
                        value={taskTitle}
                        onChange={(e)=>{
                            setTaskTitle(e.target.value)
                        }}
                        className='p-2 rounded text-gray-400 bg-zinc-700 mt-2 border-1 w-[400px] h-[50px] border-black ' type="text" placeholder='Make a Ui design' />
                    </div>
                    {/* ****************************** */}
                    <div>
                    <h3 className='text-2xl font-serif text-blue-400 font-bold'>Date</h3>
                    <input
                    value={taskDate}
                    onChange={(e)=>{
                        setTaskDate(e.target.value)
                    }}
                     className='rounded p-2 text-gray-400 bg-zinc-700  mt-2 border-1 w-[400px] h-[50px] border-black ' type="date" />
                </div>
                <div>
                    <h3 className='text-2xl text-blue-400  font-serif font-bold' >Asign to</h3>
                    <input
                    value={asignTo}
                    onChange={(e)=>{
                        setAsignTo(e.target.value)
                    }}
                     className='rounded p-2 text-gray-400 bg-zinc-700  mt-2 border-1 w-[400px] h-[50px] border-black ' type="text" placeholder='Employee name '/>
                </div>
                <div>
                    <h3 className='text-2xl text-blue-400 font-serif font-bold'>Category</h3>
                    <input
                    value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}
                     className='rounded p-2 bg-zinc-700  text-gray-400 mt-2 border-1 w-[400px] h-[50px] border-[black] ' type="text" placeholder='Design ,Dev,etc' />
                </div>
                </div>
                    <div className='flex flex-col '>
                        <div>
                        <h3 className='text-4xl pl-3 text-blue-400 font-serif font-bold' >Description</h3>
                        <textarea
                        value={taskDescription}
                        onChange={(e)=>{
                            setTaskDescription(e.target.value)
                        }}
                         className=' mt-2 text-gray-400 p-3 bg-zinc-700  border-1 border-black ml-2 mr-2 rounded-sm w-[400px]' name="" rows="11" placeholder='Enter the Details Here'/>
                        </div>
                        <div>
                        <div className='text-center'>
                        <button className='border-1 w-[400px] text-white font-extrabold font-serif p-2 bg-blue-400 border-black  rounded-md '>Enter Task</button>
                        </div>
                        </div>
                    </div>


                
              
                
              
                




            </form>
        </div>
    </div>
  )
}

export default CreateTask