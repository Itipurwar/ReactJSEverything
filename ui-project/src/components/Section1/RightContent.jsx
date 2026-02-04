import React from 'react'
import RightCard from './RightCard'
import 'remixicon/fonts/remixicon.css'

const RightContent = (props) => {
  console.log(props.users);

  return (
    <div id='right' className='h-full flex flex-nowrap rounded-4xl overflow-x-auto gap-10 p-6 w-2/3 '>
        {props.users.map(function(elem,idx){
          return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
        })}
        
    </div>
  )
}

export default RightContent
