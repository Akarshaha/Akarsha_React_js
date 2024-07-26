import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import card from './card'
import Card from './card'

function App() {
  // const [count, setCount] = useState(0)
  const myArr = [1, 2, 3, 4, 5, 6, 7]

  return (
    <>
      <h1 className='txt text-3xl bg-red-500 p-6 rounded md'>My  Profile</h1>
      <Card username = 'akarsha' post='software developer' arr = {myArr} />
      <Card/>
      <Card post='Account Receiver'/>
    </>
  )
}

export default App
