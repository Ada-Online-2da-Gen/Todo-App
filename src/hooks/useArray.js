import { useState } from 'react'

const useArray = (initialState) => {
  const [items, setItems] = useState(initialState)

  const add = (item) => setItems([...items, item])

  const getById = (id) => items.find((item) => item.id === id)

  const replaceById = (id, replace) => {
    const updatedItems = items.map((item) => (item.id === id ? replace : item))
    setItems(updatedItems)
  }

  const updateTodoById = (id, newProperties) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, ...newProperties } : item
    )
    setItems(updatedItems)
  }

  const removeById = (id) => {
    const updatedItems = items.filter((item) => item.id !== id)
    setItems(updatedItems)
  }

  const clear = () => {
    setItems([])
  }

  return [
    items,
    {
      add,
      getById,
      replaceById,
      updateTodoById,
      removeById,
      clear,
      updateAll: setItems
    }
  ]
}

export default useArray
