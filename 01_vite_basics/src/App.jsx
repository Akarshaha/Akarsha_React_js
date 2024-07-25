import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count,setcounter] = useState(0)
  const addvalue = () => {
    setcounter((prevcount) => prevcount + 1)
    setcounter((prevcount) => prevcount + 1)
    setcounter((prevcount) => prevcount + 1)

  }
  const removevalue = () => {
    setcounter(count - 1)
  }

  return (
    <>
     <h1>Akarsha</h1>
     <h2>Counter value : {count} </h2>
     <button onClick={addvalue}>ADD VALUE</button> {" "}
     <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
