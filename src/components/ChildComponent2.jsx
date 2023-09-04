import React from 'react'

const ChildComponent2 = (props) => {
  return (
    <div>
      <p>I have been studing React for {props.obj.duration}</p>
      <p> I dream that will create {props.obj.title}</p>
    </div>
  )
}

export default ChildComponent2
