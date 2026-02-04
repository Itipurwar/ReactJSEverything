import React, { useState } from 'react'
const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    
    const CopyTask = [...task];
    CopyTask.push({title,details})
    setTask(CopyTask)
    console.log(task);
    

    setTitle('') 
    setDetails('')
  }

  const delteNote = (idx)=>{
    const copyTask = [...task];
    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 items-start flex-col p-10'>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        {/* 1st input for heading  */}
        <input 
        className='px-5 py-2 w-full border-2 outline-none rounded'
        type="text" 
        placeholder='Enter Notes Heading' 
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          
        }}
        />
        {/* Detailed input */}
        <textarea type="text" 
        className='flex flex-row items-start px-5 py-2 h-32 w-full border-2 outline-none rounded'
        placeholder='Write Details Here'
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
          
          
        }}
        />
        <button 
        className='bg-white text-black active:scale-95 font-medium outline-none w-full px-5 py-2 rounded'
        
        >Add Notes</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem, idx){
            return <div key={idx} className="flex flex-col justify-between item-start h-60 w-40 relative bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-xl font-bold wrap-break-word overflow-hidden'>{elem.title}</h3>
                <p className='leading-tight text-xs font-semibold text-gray-600 mt-2 wrap-break-word overflow-hidden'>{elem.details}</p>
              </div>
              <button onClick={() => {
                delteNote(idx)
              }} 
              className='w-full bg-red-500 cursor-pointer active:scale-95 text-white py-1 text-xs rounded font-bold'>
                Delete
              </button>
            </div>
          })}
         
        </div>
      </div>
    </div>
  )
}

export default App