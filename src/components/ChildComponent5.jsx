import React from 'react'

const ChildComponent5 = (props) => {
  return (
(    <div style={{width:'80px',height:'80px',backgroundColor:'skyblue', transform: 'rotate(45deg)', marginTop:'2rem' }}>
<p style = {{rotate:'-45deg', paddingTop:'1rem'}}>{props.number}</p>
</div>)
  )
}

export default ChildComponent5
