import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'


const todoList = [{
          id : 1,
          todo : 'go to gym',
          descriptipn : "go gym at evening"
        },
        {
          id : 2,
          todo : "eat food",
          descriptipn : 'Briyani'
        },
      {
        id : 3, 
        todo : 'Study',
        descriptipn: 'Study the Cohort'
      }]

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count => count + 1);
    }, 1000)
  }, [count])

  //wihout dependecies callback function will call each time when component state changes
  //with dependcies it will be only 1 time when state changes or page reload
  //dependencies with value will call the function when value changes

  return (
    <>
      <button>Add 1</button>
      <button>Add 2</button>
      <button>Add 3</button>
      <h2>I will be change in every 1 second : <button>{count}</button></h2>
    </>
  )
}

export default App
