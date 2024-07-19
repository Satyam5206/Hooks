import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    alert("Welcome to my page")
  }, [])
  
  useEffect(() => {
    alert("Count was change")
  }, [count])
  

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    </>
  )
}

export default App
