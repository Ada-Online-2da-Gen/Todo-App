import React, { useContext } from 'react'

import Container from 'components/Container/Container'
import TodoList from 'components/TodoList/TodoList'
import Modal from 'components/Modal/Modal'
import TodoFilters from 'components/TodoFilters/TodoFilters'
import TodoControl from 'components/TodoControl/TodoControl'

import ModalContext from 'contexts/ModalContext'

import styles from 'components/app.module.scss'

const App = () => {
  const { isModalShown, todoModal, hideModal } = useContext(ModalContext)

  return (
    <Container className={styles['main-container']}>
      <TodoControl />
      <TodoFilters />
      <TodoList />
      {isModalShown && <Modal item={todoModal} onClose={hideModal} />}
    </Container>
  )
}

export default App
