import React from 'react'

const Mainsetting = () => {
    const pd=(e)=>{
        e.preventDefault();
    }
  return (
    <div className='mt-10 ml-5 w-full'>
        <h1 className='text-3xl font-medium pl-4'>Settings</h1>
        <p className='text-xl text-gray-600 pl-4'>Manage your subject Data</p>
        <div className=' w-6/7 m-5 border rounded-3xl p-7 border-gray-600'>
            <h2 className='text-2xl font-medium'>Subject Management</h2>
            <p className='text-xl font-medium text-gray-600'>Add or remove Subjects</p>
         

            <form className='flex flex-col' onClick={(data)=>{
            pd(data)

          }} >
                <label htmlFor=" " className='text-2xl font-medium mt-3'>Add New Subject</label>
                <div className='flex justify-around mt-1'> 
                    <input type="text" placeholder='Add the new Subject'  className='text-2xl w-full border pl-3 rounded-xl'/>
                    <button className='border w-26 ml-5  text-xl rounded-2xl p-3'>+ Add</button>
                    
                </div>
            </form>
         <h2 className='text-2xl font-medium m-4'>Current Subjects</h2>
         

        
            <ul className='text-xl font-normal ml-4 flex flex-wrap gap-3'>
                <li className='text-xl border w-fit rounded-xl p-3'>MERN Study</li>
                <li className='text-xl border w-fit rounded-xl p-3'>Cyber security</li>
                <li className='text-xl border w-fit rounded-xl p-3'>Python Study</li>
                <li className='text-xl border w-fit rounded-xl p-3'>English Practice</li>
            </ul>
            <p className='text-xl  m-4'>Default subjects cannot be deleted</p>
       

        </div>


        <div className=' w-6/7 m-3 border rounded-3xl p-7 border-gray-600'>
            <h1 className='text-3xl font-medium pl-4'>Data Management</h1>
            <p className='text-xl text-gray-500 pl-4'>Clear all your study Data</p>

            <div className='border border-red-600  bg-red-100 mt-2 p-5 rounded-2xl'>
                <h1 className='text-xl font-medium text-black  pl-3 rounded-xl'><span><i className="ri-file-warning-fill text-red-600"></i></span> Clear All Data</h1>
                <p className='text-xl  text-black ml-11.5'>This will delete all the data about your study session and reset the subjects to default. this action cannot be undone.</p>

                <button className='bg-red-600 text-xl px-4 py-2 rounded-2xl text-white ml-11.5 mt-2 ' onClick={(data)=>{
            pd(data)

          }}>Clear All Data</button>


            </div>

        </div>
    </div>
  )
}

export default Mainsetting;