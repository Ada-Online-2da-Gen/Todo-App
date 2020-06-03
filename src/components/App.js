import React, { useState } from 'react'
import shortId from 'shortid'

import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import TodoList from 'components/TodoList/TodoList'
import Todo from 'components/Todo/Todo'
import Button from 'components/Button/Button'
import Checkbox from 'components/Checkbox/Checkbox'

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

  const handleCheckbox = (event, id) => {
    const addStatus = todos.map((todo) => {
      let { status } = todo
      if (event.target.checked && todo.id === id) {
        status = 'completed'
      } else if ((!event.target.checked && todo.id === id) || !status) {
        status = 'pending'
      }
      return { ...todo, status }
    })

    setTodos(addStatus)
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
          <Todo key={todo.id} id={todo.id} status={todo.status}>
            <Checkbox onChange={(event) => handleCheckbox(event, todo.id)} />
            {todo.text}
          </Todo>
        ))}
      </TodoList>
    </Container>
  )
}

export default App
