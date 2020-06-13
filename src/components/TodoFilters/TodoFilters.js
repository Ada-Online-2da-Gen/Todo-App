import React, { useContext } from 'react'
import Text from 'components/Text/Text'
import Button from 'components/Button/Button'
import Select from 'components/Select/Select'
import Option from 'components/Option/Option'
import Container from 'components/Container/Container'
import TodoContext from 'contexts/TodoContext'
import styles from 'components/app.module.scss'

const TodoFilters = () => {
  const { todoActions, getPendingTodos, setStatusFilter } = useContext(TodoContext)

  const handleSelectFilterChange = (event) => {
    setStatusFilter(event.target.value)
  }

  const handleDeleteCompletedButtonClick = () => {
    todoActions.updateAll(getPendingTodos())
  }

  return (
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
  )
}

export default TodoFilters
