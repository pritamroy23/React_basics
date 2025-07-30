import React from 'react'

const App = () => {
  const [a, setA] = React.useState(10)
 
  return (
    <div> 
      <h1>value of a is {a} </h1>
      <button>changeA</button>
    </div>
  )
}

export default App