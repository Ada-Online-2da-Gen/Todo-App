import React, { useState } from 'react'

import Container from 'components/Container/Container'
import TodoList from 'components/TodoList/TodoList'
import Modal from 'components/Modal/Modal'
import TodoFilters from 'components/TodoFilters/TodoFilters'
import TodoControl from 'components/TodoControl/TodoControl'
import { TodoProvider } from 'contexts/TodoContext'

import styles from 'components/app.module.scss'

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false)
  const [todoModal] = useState({})

  const handleCloseModal = () => setIsModalShown(false)

  return (
    <TodoProvider>
      <Container className={styles['main-container']}>
        <TodoControl />
        <TodoFilters />
        <TodoList />
        {isModalShown && <Modal item={todoModal} onClose={handleCloseModal} />}
      </Container>
    </TodoProvider>
  )
}

export default App
