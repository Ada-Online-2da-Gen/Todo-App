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

  const saveChangesEnter = (event) => {
    if (event.key === 'Enter' && todoText.length > 0) {
      onUpdateText(id, todoText)
      setIsEditing(false)
    }
  }

  const escapeEdit = (event) => {
    if (event.key === 'Escape') {
      cancelEdit()
    }
  }

  const saveChangesBtn = () => {
    if (todoText.length > 0) {
      onUpdateText(id, todoText)
      setIsEditing(false)
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
        onKeyPress={saveChangesEnter}
        onKeyDown={escapeEdit}
        onBlur={cancelEdit}
        value={todoText}
      />
      <CancelIcon onClick={cancelEdit} />
      <Button onClick={saveChangesBtn}>Guardar</Button>
    </>
  ) : (
    <ListItem onMouseEnter={showEditIcon} onMouseLeave={hideEditIcon} {...props}>
      {children} {isMouseOver && <EditIcon onClick={editTodo} />}
    </ListItem>
  )
}

export default Todo
