// function App(){
//   return <h1>Kaise ho Dosto !!</h1>;
// }
// export default App;

// rafce -> React Arrow Function Component Export

// import React from 'react'

const App = () => {
  return (

    // use multiple div to wrap multiple headings
    // <div>
    //   <div>
    //     <h1>App</h1>
    //     <h3>React</h3>
    //   </div>

    //   <div>
    //     <h2>Kaise ho Dosto !!</h2>
    //   </div>
    // </div>
    // if we create heading outside div then it will give error
    // func mai ek bar m ek hi cheez return kr skte hai 
    // isliye div mai wrap krna pdta hai
    // what is solution -> div craete krke uske andar heading ko rakhna hai multiple cheeze return krne ke liye
    // solution 2 -> use React.Fragment or short syntax <> </>  
    
    // react fragment example
    // <>
    //   <h1>App</h1>
    //   <h2>Kaise ho Dosto !!</h2>
    // </>

    <>
      <div id="dad">
        <h1 id="beta1">Rishabh</h1>
        <h2 id="beta2">chotu</h2>
      </div>
      <div id="mom">
        <h1 id="beti1">Pragya</h1>
        <h2 id="beti2">Iti Purwar</h2>
        <h3 id="beti3">Khushi</h3>
      </div>
    </>

  )
}

export default App
