import React from 'react'

const ChildComponent1 = (props) => {
  return (
    <div>
      <p>{props.message}</p>
      <p> Can I learn React: {props.isEnable ? "Yes":"No"}</p>
      
    </div>
  )
}

export default ChildComponent1
