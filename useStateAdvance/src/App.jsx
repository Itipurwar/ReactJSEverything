import React, { useState } from 'react'

const App = () => {

  
  // const [num, setNum] = useState({user:'Rishi',age:17})
  // const btnClicked = () => {
  //   setNum(prev=>({...prev,age:50}))
  // }
  // return (
  //   <div>
  //     <h1>{num.user},{num.age}</h1>
  //     <button onClick={btnClicked}>Click</button>
  //   </div>
  // )

  const [num, setNum] = useState(10)
  const btnClicked = () => {
    setNum(prev =>(prev+1));
    setNum(prev =>(prev+1));
    setNum(prev =>(prev+1));
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )


}

export default App      