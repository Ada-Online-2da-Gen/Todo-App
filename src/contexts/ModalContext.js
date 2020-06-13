import React, { useState, createContext } from 'react'
const ModalContext = createContext()

const ModalProvider = ({ children }) => {
  const [isModalShown, setIsModalShown] = useState(false)
  const [todoModal, setTodoModal] = useState({})
  const hideModal = () => setIsModalShown(false)
  const showModal = () => setIsModalShown(true)

  return (
    <ModalContext.Provider value={{ isModalShown, hideModal, showModal, todoModal, setTodoModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export { ModalProvider }
export default ModalContext
