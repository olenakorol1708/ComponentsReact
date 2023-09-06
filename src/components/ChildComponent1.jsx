import React from 'react'

const ChildComponent1 = ({message, isEnable}) => {
  return (
    <div>
      <p>{message}</p>
      <p> Can I learn React: {isEnable ? "Yes":"No"}</p>
      
    </div>
  )
}

export default ChildComponent1
