import React, { useState } from 'react'
import ListItem from 'components/ListItem/ListItem'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import { FaEdit } from 'react-icons/fa'
import { MdCancel } from 'react-icons/md'

const Todo = ({ onUpdateText, id, value, children, ...props }) => {
  const [editing, setEditing] = useState(false)
  const [toDoText, setToDoText] = useState(value)
  const [changeElement, setChangeElement] = useState(false)

  const showEditIcon = () => setEditing(true)
  const hideEditIcon = () => setEditing(false)

  const editToDo = () => setChangeElement(true)

  const changeToDoText = (event) => setToDoText(event.target.value)

  const saveChangesEnter = (event) => {
    if (event.key === 'Enter' && toDoText.length > 0) {
      onUpdateText(id, toDoText)
      setChangeElement(false)
    }
  }

  const escapeEdit = (event) => {
    if (event.key === 'Escape') {
      setToDoText(value)
      setChangeElement(false)
    }
  }

  const saveChangesBtn = () => {
    if (toDoText.length > 0) {
      onUpdateText(id, toDoText)
      setChangeElement(false)
    }
  }

  const cancelEdit = () => {
    setToDoText(value)
    setChangeElement(false)
  }

  return changeElement ? (
    <>
      <Input
        onChange={changeToDoText}
        onKeyPress={saveChangesEnter}
        onKeyDown={escapeEdit}
        onBlur={cancelEdit}
        value={toDoText}
      />
      <MdCancel onClick={cancelEdit} />
      <Button onClick={saveChangesBtn}>Guardar</Button>
    </>
  ) : (
    <ListItem onMouseEnter={showEditIcon} onMouseLeave={hideEditIcon} {...props}>
      {children} {editing && <FaEdit onClick={editToDo} />}
    </ListItem>
  )
}

export default Todo
