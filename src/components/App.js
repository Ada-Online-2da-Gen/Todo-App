import React, { useState } from 'react'
import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import TodoList from 'components/List/TodoList'
import Todo from 'components/ListItem/Todo'
import Button from 'components/Button/Button'

const App = () => {
  const todosList = [
    { id: 0, text: 'Poner estilos' },
    { id: 1, text: 'Armar componentes' },
    { id: 2, text: 'Agregar funcionalidad' }
  ]

  const [todos, setTodos] = useState(todosList)
  const [input, setInput] = useState('')

  const addTodo = () => {
    setTodos([...todos, { id: todos.length, text: input }])
    setInput('')
  }

  const handleKeyPress = (event) => {
    event.key === 'Enter' && input.length > 0 && addTodo()
  }

  const handleClick = (event) => {
    event.type === 'click' && input.length > 0 && addTodo()
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <Container>
      <Container>
        <Input
          onKeyPress={handleKeyPress}
          value={input}
          onChange={handleChange}
          placeholder="Ingrese una nueva tarea"
        />
        <Button className="button" onClick={handleClick}>
          Agregar
        </Button>
      </Container>
      <TodoList>
        {todos.map((todo, index) => (
          <Todo key={index} id={todo.id}>
            {todo.text}
          </Todo>
        ))}
      </TodoList>
    </Container>
  )
}

export default App
