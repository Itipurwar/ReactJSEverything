// import React from 'react'
// import Card from './components/Card'

// const App = () => {
//   return (
//     <div className='parent'>
//       <Card />
//       <Card />
//     </div>
    
//   )
// }
// export default App


// use props

// import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='Iti Purwar' age={24}/>
      <Card user='Pragya Purwar' age={30}/>
    </div>
  )
}

export default App
