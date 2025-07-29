import React from 'react'
const App = () => {
  const user = "pritam";
  const abc =() => {
    console.log("button clicked");
  }
  const age = 20;
  return (
    <div >
      <h1>Hello {user}, your age {age}</h1>
      <button className ="btn" onClick={abc}>change user</button>
      
    </div>
  );

}
export default App;