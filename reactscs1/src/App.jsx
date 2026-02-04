
// Here we use className for class like id and class in css

// import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/card'
const App = () => {
  return (
    <>
    <div>
      <h4>App.jsx File</h4>
      <Navbar />
      {Cards()} 
      <Cards />
    </div>
    </>
    // Cards.jsx me ek hi Card bana ho,
    // par render count App.jsx decide karta hai. 👍
    // {} why use braces -> to write javascript code inside jsx
    // {name} → JS variable
    // {2+3} → JS expression
    // {function()} → {Card()} -> JS function call
  )
}
export default App
