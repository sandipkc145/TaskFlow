import React, { useContext } from 'react'
import Boards from './Boards'
import { Data } from '../Maindata'



const DMain = () => {
const{DataArray}=useContext(Data);


  // 💡 Convert your DataArray into dashboard statistics
const getStats = () => {
  const now = new Date();

  // Convert hours to number safely
  const sessions = DataArray.map(s => ({
    ...s,
    hour: Number(s.hour)
  }));

  // 🔹 Total Hours
  const totalHours = sessions.reduce((sum, s) => sum + s.hour, 0);

  // 🔹 Weekly Hours (last 7 days)
  const weeklyHours = sessions
    .filter(s => {
      const diff = (now - new Date(s.date)) / (1000 * 60 * 60 * 24);
      return diff <= 7;
    })
    .reduce((sum, s) => sum + s.hour, 0);

  // 🔹 Monthly Hours (last 30 days)
  const monthlyHours = sessions
    .filter(s => {
      const diff = (now - new Date(s.date)) / (1000 * 60 * 60 * 24);
      return diff <= 30;
    })
    .reduce((sum, s) => sum + s.hour, 0);

  // 🔹 Group by subject
  const subjectTotals = {};
  sessions.forEach(s => {
    subjectTotals[s.subject] =
      (subjectTotals[s.subject] || 0) + s.hour;
  });

  const sortedSubjects = Object.entries(subjectTotals).sort(
    (a, b) => b[1] - a[1]
  );

  const mostStudied = sortedSubjects[0] || ["None", 0];
  const leastStudied = sortedSubjects[sortedSubjects.length - 1] || ["None", 0];

  return { totalHours, weeklyHours, monthlyHours, mostStudied, leastStudied };
};

const { totalHours, weeklyHours, monthlyHours, mostStudied, leastStudied } = getStats();




  return (
   <main>
    <div className='p-5'>
        <h1 className='text-2xl font-medium'>Dashboard</h1>
        <p className='text-gray-600'>Overview of your Study progress</p>
    </div>
    <div className='lg:flex lg:justify-evenly flex ml-2 gap-2 flex-wrap flex-start'>
      
    <Boards topic={'Total Hours'} item={totalHours} />
    <Boards topic={'Weekly Hours'} item={weeklyHours} />
    <Boards topic={'Monthly Hours'} item={monthlyHours} />
    <Boards topic={'Most Studied'} item={mostStudied[0]} time={`${mostStudied[1]} hours`} />
    <Boards topic={'Least studied'} item={leastStudied[0]} time={`${leastStudied[1]} hours`} />

       
    </div>
   </main>
  )
}

export default DMain