import React from 'react'

const App = () => {
  const submitHandler=() =>{
    console.log('Form Submitted');
    
  }
  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='Enter your name' />
      <button>Submit</button>
    </form>
  )
  // problem -> form has default behaviour like when anyonesubmit then page is reloaded . we want that we prevent that type of behaviour.

  // solution -> In form we pass e variable 



  // const submitHandler=(e) =>{
  //   e.preventDefault()
  //   console.log('Form Submitted');
    
  // }
  // return (
  //   <form onSubmit={(e) => {
  //     submitHandler(e)
  //   }}>
  //     <input type="text" placeholder='Enter your name' />
  //     <button>Submit</button>
  //   </form>
  // )

}

export default App