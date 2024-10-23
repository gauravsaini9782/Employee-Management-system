import React from 'react';

const TaskList =() => {
    return(
        <div id='tasklist' className='h-[40%] overflow-x-auto  flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
            
            <div className=' flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl'>
               <div className='flex justify-between items-center px-3 mt-3 ml-3 mr-3 '>
                <h3 className='bg-red-600  text-sm px-3 mt-3 ml-3 mr-3 py-1 rounded'>High</h3>
                <h4 className=' text-sm p py-1 '> 23 October 2024</h4>
               </div>
               <h2 className='mt-5 text-xl px-3 mt-3 ml-3 mr-3 font-semibold'>Make a Yotube Video </h2>
                <p id='para' className='text-sm'></p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem quam ducimus ipsam fugit nam.
            </div>
            

     </div>
    )
}

export default TaskList