import React from 'react'

const All_session = () => {

  return (
    <div className='mt-10 ml-7 w-full'>
        <h1 className='text-3xl font-medium'>All Session</h1>
        <p className='text-2xl text-gray-500 pb-2'>View and manage all study session</p>

        <div className=' w-6/7  m-5 border rounded-3xl p-7 border-gray-600'> 
            <h3 className='text-2xl font-normal'>Study Session</h3>
            <div className='flex  mt-6 gap-4'>
                <input type="text" placeholder='Add the new Subject'  className='text-xl w-6/7 border pl-3 rounded-xl'/>
                <input type="date" className='border rounded-xl p-2' />
                
            </div>
            <div className='mt-10'>
                <ul className='flex flex-col min-h-60 items-center text-xl'>
                    <li >No Study Session yet</li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default All_session