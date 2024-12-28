import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'

const TaskList = ({data}) => {
   return (
        <div id='TaskList' className='h-[55%] mt-10 w-full overflow-x-auto flex items-center justify-start gap-x-4  '>
          {data.tasks.map((elem,index)=>{
            if(elem.active)
              return <AcceptTask key={index} data={elem} />
            if(elem.failed){
              return <FailedTask key={index} data={elem}/>
            }
            if(elem.completed){
              return <CompletedTask key={index} data={elem}/>
            }
            if(elem.newTask){
              return <NewTask key={index} data={elem} />
            }

          })
          
          }

        </div>
  )
}

export default TaskList