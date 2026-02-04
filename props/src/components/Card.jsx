// import React from 'react'
 
// const Card = () => {
//   return (
//       <div className="card">
//         <img src="https://plus.unsplash.com/premium_photo-1765352863139-5252070c327d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" alt="image..." />
//         <h1>Iti Purwar</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         <button>View Profile</button>
//       </div>
//   )
// }
// export default Card

// import React from 'react'

const Card = (props) => {
  console.log(props);
  // console.log(props.user, props.age);
  
  return (
    <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1765352863139-5252070c327d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" alt="image..." />
        <h1>{props.user} , {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card
