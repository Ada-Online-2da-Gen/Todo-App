import React, { useState } from 'react'
import shortId from 'shortid'

import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import TodoList from 'components/TodoList/TodoList'
import Todo from 'components/Todo/Todo'
import Text from 'components/Text/Text'
import Button from 'components/Button/Button'
import Modal from 'components/Modal/Modal'
import Select from 'components/Select/Select'
import Option from 'components/Option/Option'

import styles from 'components/app.module.scss'

import todosList from 'data'

const App = () => {
  const [todos, setTodos] = useState(todosList)
  const [input, setInput] = useState('')
  const [isModalShown, setIsModalShown] = useState(false)
  const [todoModal, setTodoModal] = useState({})

  const [statusFilter, setStatusFilter] = useState('all')

  const addTodo = () => {
    setTodos([...todos, { id: shortId.generate(), title: input, status: 'pending' }])
    setInput('')
  }

  const handleUpdateTodo = (id, title) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, title } : todo))
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

  const handleDetailsTodoClick = (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id)
    setTodoModal(selectedTodo)
    setIsModalShown(true)
  }

  const handleCloseModal = () => setIsModalShown(false)

  const handleSelectFilterChange = (event) => {
    setStatusFilter(event.target.value)
  }

  const filterTodosByStatus = (todo) => {
    return statusFilter === 'all' ? true : todo.status === statusFilter
  }

  const pendingTodos = todos.filter((todo) => todo.status === 'pending').length

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
      <Container>
        <Text>Cantidad de pendientes: {pendingTodos}</Text>
      </Container>
      <Container>
        <Text>Filtrar</Text>
        <Select onChange={handleSelectFilterChange}>
          <Option id="all" value="all">
            Todas
          </Option>
          <Option id="completed" value="completed">
            Completadas
          </Option>
          <Option id="pending" value="pending">
            Pendientes
          </Option>
        </Select>
      </Container>
      <TodoList>
        {todos.filter(filterTodosByStatus).map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            status={todo.status}
            onStatusChange={handleStatusChange}
            onTitleUpdate={handleUpdateTodo}
            onDelete={handleDeleteTodo}
            onDetailsTodoClick={handleDetailsTodoClick}
          >
            {todo.title}
          </Todo>
        ))}
      </TodoList>
      {isModalShown && <Modal item={todoModal} onClose={handleCloseModal} />}
    </Container>
  )
}

export default App
