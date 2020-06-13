import React, { useContext } from 'react'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import Container from 'components/Container/Container'
import TodoContext from 'contexts/TodoContext'
import useInput from 'hooks/useInput'
import shortId from 'shortid'
import styles from 'components/app.module.scss'

const TodoControl = () => {
  const { todoActions } = useContext(TodoContext)
  const [todoInput, updateTodoInput, clearTodoInput] = useInput('')

  const handleKeyPress = (event) => {
    event.key === 'Enter' && todoInput.length > 0 && addTodo()
  }

  const handleClick = (event) => {
    event.type === 'click' && todoInput.length > 0 && addTodo()
  }

  const addTodo = () => {
    todoActions.add({ id: shortId.generate(), title: todoInput, status: 'pending' })
    clearTodoInput()
  }

  return (
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
  )
}

export default TodoControl
