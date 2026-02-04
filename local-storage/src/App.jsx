import React from 'react'

const App = () => {

  // localStorage.setItem('user','Iti')
  // localStorage.setItem('age','23')
  // const user = localStorage.getItem('user')
  // const age = localStorage.getItem('age')
  // console.log(user,age);

  // Remove an item
  // localStorage.removeItem('user')
  
  

  // localStorage.clear()
  // sessionStorage.clear()

  // const user = {
  //   userName:'Iti Purwar',
  //   age:23,
  //   city:'Bhopal'
  // }
  // localStorage.setItem('user',JSON.stringify(user))
  // console.log(user);

  const users = JSON.parse(localStorage.getItem('user'))
  // console.log(typeof(users));
  console.log(users);

  return (
    <div>App</div>
  )
}

export default App