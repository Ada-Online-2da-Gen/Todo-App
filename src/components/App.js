import React, { useState } from 'react'
import shortId from 'shortid'

import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import TodoList from 'components/TodoList/TodoList'
import Todo from 'components/Todo/Todo'
import Button from 'components/Button/Button'

import todosList from 'data'

const App = () => {
  const [todos, setTodos] = useState(todosList)
  const [input, setInput] = useState('')

  const addTodo = () => {
    setTodos([...todos, { id: shortId.generate(), text: input }])
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

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
    <Container>
      <Container>
        <Input
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          placeholder="Ingrese una nueva tarea"
        />
        <Button className="button" onClick={handleClick}>
          Agregar
        </Button>
      </Container>
      <TodoList>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} onDelete={() => handleDeleteTodo(todo.id)}>
            {todo.text}
          </Todo>
        ))}
      </TodoList>
    </Container>
  )
}

export default App
