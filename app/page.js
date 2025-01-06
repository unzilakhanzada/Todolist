"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [des, setdes] = useState("")
  const [task, settask] = useState([])
  const deleteHandler=(i)=>{
   let copy=[...task]
   copy.splice(i,1)
   settask(copy)
  }
  const submit=(e)=>{
   e.preventDefault();
   if (!title || !des) {
    alert("Please fill in both fields.");
    return;
  }
    
   settask([...task,{title,des}])
   settitle("")
    setdes("")
   
  }
  const render = task.length === 0 ? (
    <h2>No Task Available</h2>
  ) : (
    task.map((t, i) => (
      <div key={i} className="p-2 bg-gray-200 mb-2 rounded flex justify-between">
        <h5 className="font-bold">{t.title}</h5>
        <h6>{t.des}</h6>
        <button onClick={()=>{
          deleteHandler(i)
        }} 
        className='border-5 bg-slate-900 text-yellow-200 p-3 rounded '>Delete</button>
      </div>
    ))
  );
    
  return (
    
    <>
    <h1 className=' bg-slate-900 text-yellow-200 text-3xl text-center p-7'> My ToDo List</h1>
    <form onSubmit={submit}>
    <input type="text" placeholder='Enter the task here' className=' border-zinc-500 bg-slate-950 text-yellow-600 text-2xl mx-8 mt-8 p-5 '
    value={title}
    onChange={(e)=>{
      settitle(e.target.value)
    }}
    />

    <input type="text" placeholder='Enter the descerption here' className=' border-zinc-500 bg-slate-950 text-yellow-600 text-2xl mx-8 mt-8 p-5 ' 
    value={des}
    onChange={(e)=>{
      setdes(e.target.value)
    }}/>

    <button className='border-zinc-50 bg-slate-900 text-yellow-500 mx-5 px-4 py-3 text-2xl rounded'>Add Task</button>
    
    </form>
    <hr/>
    <div className='text-center bg-yellow-300 text-black m-14 text-4xl p-5'>
    {render}
    </div>
    </>
  )
}

export default page