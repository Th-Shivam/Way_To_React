import { useState } from 'react'


function App() {

  const [count, setCount] = useState(0)

  function Increment() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Current count = {count}</h1>
      <button onClick={Increment}>Increment</button>
    </>
  )
}

export default App
