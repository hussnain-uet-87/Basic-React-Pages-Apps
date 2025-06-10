import { useState } from 'react'
import Weather from '../Components/Weather'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Weather />
     </>
  )
}

export default App
