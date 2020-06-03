import React, { useState } from 'react'
import { FaEdit as EditIcon } from 'react-icons/fa'
import { MdCancel as CancelIcon } from 'react-icons/md'
import ListItem from 'components/ListItem/ListItem'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'

const Todo = ({ onUpdateText, id, value, children, ...props }) => {
  const [editing, setEditing] = useState(false)
  const [todoText, setTodoText] = useState(value)
  const [changeElement, setChangeElement] = useState(false)

  const showEditIcon = () => setEditing(true)
  const hideEditIcon = () => setEditing(false)

  const editTodo = () => setChangeElement(true)

  const changeTodoText = (event) => setTodoText(event.target.value)

  const saveChangesEnter = (event) => {
    if (event.key === 'Enter' && todoText.length > 0) {
      onUpdateText(id, todoText)
      setChangeElement(false)
    }
  }

  const escapeEdit = (event) => {
    if (event.key === 'Escape') {
      setTodoText(value)
      setChangeElement(false)
    }
  }

  const saveChangesBtn = () => {
    if (todoText.length > 0) {
      onUpdateText(id, todoText)
      setChangeElement(false)
    }
  }

  const cancelEdit = () => {
    setTodoText(value)
    setChangeElement(false)
  }

  return changeElement ? (
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
      {children} {editing && <EditIcon onClick={editTodo} />}
    </ListItem>
  )
}

export default Todo
