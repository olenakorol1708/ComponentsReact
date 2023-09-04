import React from 'react';


class ChildComponent3 extends React.Component {
  

 render(){
    return (
        <div>
          <p>But before I should learn these technologies:</p>
         {this.props.info.map((item,index)=>(
          <li key = {index}>{item}</li>
           ))}
        </div>
      )
 }
}

export default ChildComponent3
