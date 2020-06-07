import React, { useState } from 'react'
import shortId from 'shortid'

import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import TodoList from 'components/TodoList/TodoList'
import Todo from 'components/Todo/Todo'
import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'
import styles from 'components/app.module.scss'

import todosList from 'data'

const App = () => {
  const [todos, setTodos] = useState(todosList)
  const [input, setInput] = useState('')
  const [isModalShow, setIsModalShow] = useState(false)
  const [todoModal, setTodoModal] = useState({})

  const addTodo = () => {
    setTodos([...todos, { id: shortId.generate(), text: input, status: 'pending' }])
    setInput('')
  }

  const handleUpdateTodo = (id, text) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, text } : todo))
    setTodos(updatedTodos)
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

  const handleStatusChange = (status, id) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    setTodos(updatedTodos)
  }

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  const handleModal = (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id)
    setTodoModal(selectedTodo)
  }

  const handleClickDetailsTodo = (id) => {
    setIsModalShow(!isModalShow)
    handleModal(id)
  }

  return (
    <Container className={styles['main-container']}>
      <Container>
        <Input
          className={styles['add-todo-input']}
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          placeholder="Ingrese una nueva tarea"
        />
        <Button className={styles['save-btn']} onClick={handleClick}>
          AGREGAR
        </Button>
      </Container>
      <TodoList>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            status={todo.status}
            onStatusChange={handleStatusChange}
            onUpdateText={handleUpdateTodo}
            onDelete={handleDeleteTodo}
            onClickDetailsTodo={handleClickDetailsTodo}
          >
            {todo.text}
          </Todo>
        ))}
      </TodoList>
      {isModalShow && <Modal item={todoModal} onCloseModal={handleClickDetailsTodo} />}
    </Container>
  )
}

export default App
