import { useState } from 'react';
// import React {useState} from 'react';
import './App.css'

function App() {
  const [counter , setCounter] = useState(0);

  const add = () => {
    console.log("Value Added");
    
    if (counter <= 20) {
      setCounter(counter + 1);
    } else {
      alert("Not Possible")
    }
  }

  const subtract = () => {
    console.log("Value Subtracted");
    if (counter >= 0) {
      setCounter(counter-1);
    } else {
      alert("Not Possible")
    }
  }

  // let counter = 15;
  return (
      <div>
      <h1>Vite + React</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={add}>
        Add Value
      </button>

      <button onClick={subtract}>
        Subtract Value
      </button>


      </div>
  )
}

export default App
