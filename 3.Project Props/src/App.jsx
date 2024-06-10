import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <h1>
    Tailwind CSS
   </h1>

   
    <Card  userName="Harsh" h1="About Harsh" />
    <Card  h1 = "About Wagh" />
    </>
  )
}

export default App
