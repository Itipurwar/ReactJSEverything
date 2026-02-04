import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(100)
  // useEffect(function(){
  //   console.log('use effect is running...');
  // }, [num])

  // num is dependacy here bcoz we pass num
  // return (
  //   <div>
  //     <h1>Value of num is {num}</h1>
  //     <h1>Value of num2 is {num2}</h1>

  //     <button 
  //     onMouseEnter={() => {
  //       setNum(num+1)
  //     }}

  //     onMouseLeave={() => {
  //       setNum2(num2+10)
  //     }}
  //     >Hover
  //     </button>
      
  //   </div>
  // )

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  function aChanging() {
    console.log('A ki value change ho gyi');
  }
  function bChanging() {
    console.log('B ki value change ho gyi');
  }
  useEffect(function() {
    aChanging()
  }, [a])
  useEffect(function() {
    bChanging()
  }, [b])
  return(
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button
      onClick={()=>{
        setA(a + 1)
      }}
      >
        Change A
      </button>
      <button
      onClick={()=>{
        setB(b - 1)
      }}
      >Change B
      </button>
    </div>
  )
}

export default App