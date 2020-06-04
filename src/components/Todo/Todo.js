import React, { useState } from 'react'
import { FaEdit as EditIcon } from 'react-icons/fa'
import { MdCancel as CancelIcon } from 'react-icons/md'
import { BsTrash as IconDelete } from 'react-icons/bs'
import ListItem from 'components/ListItem/ListItem'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'

const Todo = ({ id, onDelete, onUpdateText, children, ...props }) => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [todoText, setTodoText] = useState(children)
  const [isEditing, setIsEditing] = useState(false)

  const handleMouseEnter = () => setIsMouseOver(true)
  const handleMouseLeave = () => setIsMouseOver(false)

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

  const handleIconDeleteClick = () => onDelete(id)

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
    <ListItem {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isMouseOver && (
        <>
          <EditIcon onClick={editTodo} /> <IconDelete onClick={handleIconDeleteClick} />
        </>
      )}
    </ListItem>
  )
}

export default Todo
