import React, { useState } from 'react'
import { FaEdit as EditIcon } from 'react-icons/fa'
import { MdCancel as CancelIcon } from 'react-icons/md'
import ListItem from 'components/ListItem/ListItem'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'

const Todo = ({ onUpdateText, id, children, ...props }) => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [todoText, setTodoText] = useState(children)
  const [isEditing, setIsEditing] = useState(false)

  const showEditIcon = () => setIsMouseOver(true)
  const hideEditIcon = () => setIsMouseOver(false)

  const editTodo = () => setIsEditing(true)

  const changeTodoText = (event) => setTodoText(event.target.value)

  const finishTodoEdition = () => {
    if (todoText.length > 0) {
      onUpdateText(id, todoText)
      setIsEditing(false)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      finishTodoEdition()
    }
  }

  const handleSaveButtonClick = () => {
    if (todoText.length > 0) {
      finishTodoEdition()
    }
  }

  const escapeEdit = (event) => {
    if (event.key === 'Escape') {
      cancelEdit()
    }
  }

  const cancelEdit = () => {
    setTodoText(children)
    setIsEditing(false)
  }

  return isEditing ? (
    <>
      <Input
        onChange={changeTodoText}
        onKeyPress={handleKeyPress}
        onKeyDown={escapeEdit}
        value={todoText}
      />
      <CancelIcon onClick={cancelEdit} />
      <Button onClick={handleSaveButtonClick}>Guardar</Button>
    </>
  ) : (
    <ListItem onMouseEnter={showEditIcon} onMouseLeave={hideEditIcon} {...props}>
      {children} {isMouseOver && <EditIcon onClick={editTodo} />}
    </ListItem>
  )
}

export default Todo
