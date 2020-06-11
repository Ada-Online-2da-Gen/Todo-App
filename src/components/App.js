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

import useInput from 'components/hooks/useInput'
import useArray from 'components/hooks/useArray'

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false)
  const [todoModal, setTodoModal] = useState({})
  const [todoInput, updateTodoInput, clearTodoInput] = useInput('')
  const [todos, todoActions] = useArray(todosList)
  const [statusFilter, setStatusFilter] = useState('all')

  const addTodo = () => {
    todoActions.add({ id: shortId.generate(), title: todoInput, status: 'pending' })
    clearTodoInput()
  }

  const handleUpdateTodo = (id, title) => {
    todoActions.updateById(id, { title })
  }

  const handleKeyPress = (event) => {
    event.key === 'Enter' && todoInput.length > 0 && addTodo()
  }

  const handleClick = (event) => {
    event.type === 'click' && todoInput.length > 0 && addTodo()
  }

  const handleStatusChange = (id, status) => {
    todoActions.updateById(id, { status })
  }

  const handleDeleteTodo = (id) => {
    todoActions.removeById(id)
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

  const handleDeleteCompletedButtonClick = () => {
    const updatedTodos = todos.filter((todo) => todo.status !== 'completed')
    setTodos(updatedTodos)
  }

  return (
    <Container className={styles['main-container']}>
      <Container>
        <Input
          className={styles['add-todo-input']}
          value={todoInput}
          onKeyPress={handleKeyPress}
          onChange={updateTodoInput}
          placeholder="Ingrese una nueva tarea"
        />
        <Button className={styles['save-btn']} onClick={handleClick}>
          AGREGAR
        </Button>
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
        <Button className={styles['save-btn']} onClick={handleDeleteCompletedButtonClick}>
          Borrar Completadas
        </Button>
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
