import React from 'react';
import ChildComponent1 from "./components/ChildComponent1";
import ChildComponent2 from "./components/ChildComponent2";
import ChildComponent3 from './components/ChildComponent3';
import ChildComponent5 from './components/ChildComponent5';
import ChildComponent4 from './components/ChildComponent4';

const App = () => {
  const message = "Hello everybody!";
  const obj = {
    title:'my own project .',
    duration:'100 days .',

  };
  const info = ['React,', 'Redux,', 'Javascript,', 'HTML,', 'CSS'];
  const number = 2023;
  const confirmFunct = ()=>{
    alert("Check my task,please")
  }
  const isEnable = true;
  return (
    <div style = {{margin:'2rem'}}>
      <ChildComponent1 message = {message} isEnable = {isEnable}/>
      <ChildComponent2 obj = {obj}/>
      <ChildComponent3 info = {info}/>
      <ChildComponent4 confirmFunct = {confirmFunct}/>
      <ChildComponent5 number = {number}/>
    </div>
  )
}

export default App
