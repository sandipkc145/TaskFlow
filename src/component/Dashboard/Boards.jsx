import React from 'react'

const Boards = (props) => {
  return (
    <div className="w-62 p-3 shadow-md rounded-xl border border-gray-200">
            <h3 className="text-gray-600 text-sm font-medium w-fit inline">{props.topic}</h3>
            <h3 className="inline ml-25">{props.tag}</h3>
            <p className="text-3xl font-semibold my-4">{props.item}</p>
            <span className=" text-gray-400 text-2xs">{props.time}</span>

    </div>
  )
}

export default Boards;
