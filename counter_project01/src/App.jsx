import { useState } from 'react'

import './App.css'

function App() {
  // let counter=15;
 let [counter,setCounter]=useState(15)


  const addvalue=()=>{
    if(counter>=0){
   counter=counter+1
    setCounter(counter)}
  }
  const removevalue=()=>{
    counter=counter-1
    if(counter>=0){
    setCounter(counter)
    }
  }
  return (
    <>
      <h1>Hello ,Welcome to my webpage {counter}</h1>
      <h2>counter value is :{counter}</h2>
       {""}
      <button onClick={addvalue}>Increase</button>
      <button onClick={removevalue}>Decrease</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
