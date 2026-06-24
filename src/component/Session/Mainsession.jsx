import React, { useState, useContext } from 'react'; // to use the create context we need to import the useContext
import { Data } from "../Maindata"; // Data that was explicitly exported should be imported after importing the useContext


const Mainsession = () => {

  const {DataArray, setDataArray} = useContext(Data); // here we are doing array destructuring  another thing we don't need to use props

  const [subject, setsubject] = useState("");
  const [hour, sethour] = useState("");           // thes all four is needed for two way data binding in react
  const [date, setdate] = useState("");
  const [Notes, setNotes] = useState("");

  const pd = (e) => {
    e.preventDefault();  // preventing form from refreshing every add click
  };

  const resetfunction = () => {
    setsubject("");
    sethour("");      // this function helps to reset the all the thing while things need to reset to null
    setdate("");
    setNotes("");
  };


  // 🚀 THIS IS THE IMPORTANT PART
  const addSession = () => {
    if (!subject || !hour || !date) {
      alert("Please fill all required fields!"); // subject is empty which provide falsy so, where ! makes it turthy and works 
      return;                                // this is early exit;   
    }

    const newSession = {
      subject: subject,
      hour: hour,
      date: date,
      notes: Notes,
      id: Date.now()   // unique ID
    };

    const copyArray=[...DataArray] //spread operator
     copyArray.push(newSession) // adding element
     setDataArray(copyArray) // setting array
     console.log(DataArray)
    
    resetfunction(); // we called it here because it helps to reset after some items 
  
  };

  return (
    <div className='mt-4 ml-14'>
      <h1 className='text-2xl font-medium'>Add Study Session</h1>
      <p className='text-xl text-gray-500 pb-2'>Record a session</p>

      <form className='w-140 h-150 border-2 flex flex-col px-20 py-5 rounded-4xl' onSubmit={pd}>
        <h3 className='text-2xl font-medium p-5'>Session Detail</h3>

        <label className='text-xl font-medium p-2'>Subject</label>
        <input 
          type="text"
          className='p-2 border'
          placeholder='Select a Subject'
          value={subject}
          onChange={(e) => setsubject(e.target.value)}
        />

        <label className='text-xl font-medium p-2'>Hour Studied</label>
        <input 
          type="number"
          placeholder='eg: 2.5hr'
          className='p-2 border'
          value={hour}
          onChange={(e) => sethour(e.target.value)}
        />

        <label className='text-xl font-medium p-2'>Date</label>
        <input 
          type="date"
          className='p-1 border text-xl'
          value={date}
          onChange={(e) => setdate(e.target.value)}
        />

        <label className='text-xl font-medium p-2'>Notes</label>
        <textarea
          placeholder="Additional information..."
          className="p-4 border rounded-xl"
          value={Notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <div className='mt-4 flex justify-evenly'>
          <button 
            className='bg-black text-white w-35 border text-xl rounded-xl inline h-13'
            onClick={addSession}
          >
            Add session
          </button>

          <button 
            className='border w-20 rounded-xl text-xl inline'
            onClick={resetfunction}
            type="button"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mainsession;
