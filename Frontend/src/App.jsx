import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  function getTodosFunction(){
    fetch("http://localhost:3000/todos").then(async function(res) {
      const jsonData = await res.json();
      setTodos(jsonData.todoList);
    }).catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getTodosFunction();
  }, [])

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
