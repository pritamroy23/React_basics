import React,  {useState}  from 'react';




const App = () => {
 const inc =() => {
 setA(a + 1);
 };
 const dec =() => {
  setA(a - 1);
 }
  const [a, setA] = useState(0)
  return (
 
    <div >
    <h3>Number is {a}</h3>
    <button onClick ={inc}>increment</button>
    <button onClick= {dec}>decrement</button>
    </div>
  );
};


export default App