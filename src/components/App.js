import React, { useState } from 'react'
import shortId from 'shortid'

import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import TodoList from 'components/TodoList/TodoList'
import Todo from 'components/Todo/Todo'
import Button from 'components/Button/Button'

import initialTodos from 'data'

const App = () => {
  const [todos, setTodos] = useState(initialTodos)

  const handleChange = (event) => {
    event.key === 'Enter' &&
      setTodos([...todos, { id: shortId.generate(), text: event.target.value }])
  }

  return (
    <Container>
      <Container>
        <Input onKeyPress={handleChange} />
        <Button className="button">Agregar</Button>
      </Container>
      <TodoList>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id}>
            {todo.text}
          </Todo>
        ))}
      </TodoList>
    </Container>
  )
}

export default App
