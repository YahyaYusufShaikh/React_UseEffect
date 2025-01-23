import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
// import axios from "axios"


function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState({})

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count => count + 1);
    }, 1000)
  }, [])

  // useEffect(()=>{
  //   axios.get('http://localhost:3000/')
  //   .then(response =>{
  //     setTodo(response.data.todo)
  //   })
  // },[])

  //wihout dependecies callback function will call each time when component state changes
  //with dependcies it will be only 1 time when state changes or page reload
  //dependencies with value will call the function when value changes

  return (
    <>
      <button>Add 1</button>
      <button>Add 2</button> 
      {/* <p>{todo}</p>  */}
      <h2>I will be change in every 1 second : <button>{count}</button></h2>
    </>
  )
}

export default App
