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

  const handleChange = (event) => {
    event.key === 'Enter' && setTodos([...todos, { id: todos.length, text: event.target.value }])
  }

  return (
    <Container>
      <Container>
        <Input onKeyPress={handleChange} />
        <Button className="button">Agregar</Button>
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
