import React from 'react'

const App = () => {
  const [a, setA] = React.useState(10)
  const changeA = () => {
    setA(20);
  }
  return (
    <div> 
      <h1>value of a is {a} </h1>
      <button onClick={changeA}>change A</button>
    </div>
  )
}

export default App