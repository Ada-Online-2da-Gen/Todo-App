import React, { useState } from 'react'
import { FaEdit as EditIcon } from 'react-icons/fa'
import { MdClose as CancelIcon } from 'react-icons/md'
import { BsTrash as IconDelete } from 'react-icons/bs'
import ListItem from 'components/ListItem/ListItem'
import Checkbox from 'components/Checkbox/Checkbox'
import styles from 'components/Todo/todo.module.scss'
import Input from 'components/Input/Input'
import Button from 'components/Button/Button'
import Container from 'components/Container/Container'

const Todo = ({
  id,
  status,
  onStatusChange,
  onDelete,
  onUpdateTitle,
  onDetailsTodoClick,
  children,
  ...props
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const [todoTitle, setTodoTitle] = useState(children)
  const [isEditing, setIsEditing] = useState(false)

  const handleCheckboxChange = (event) => {
    const status = event.target.checked ? 'completed' : 'pending'
    onStatusChange(status, id)
  }

  const handleMouseEnter = () => setIsMouseOver(true)
  const handleMouseLeave = () => setIsMouseOver(false)

  const handleEditTodo = () => setIsEditing(true)

  const handleChangeTodoTitle = (event) => setTodoTitle(event.target.value)

  const finishTodoEdition = () => {
    if (todoTitle.length > 0) {
      onUpdateTitle(id, todoTitle)
      setIsEditing(false)
    }
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      finishTodoEdition()
    }
  }

  const handleSaveButtonClick = () => {
    if (todoTitle.length > 0) {
      finishTodoEdition()
    }
  }

  const handleIconDeleteClick = () => onDelete(id)

  const cancelEdit = () => {
    setTodoTitle(children)
    setIsEditing(false)
  }

  const handleEscapeEdit = (event) => {
    if (event.key === 'Escape') {
      cancelEdit()
    }
  }

  const handleCancelEdit = () => {
    cancelEdit()
  }

  const handleDetailsTodoClick = () => onDetailsTodoClick(id)

  return isEditing ? (
    <Container className={styles['input-wraper']}>
      <Input
        onChange={handleChangeTodoTitle}
        onKeyPress={handleKeyPress}
        onKeyDown={handleEscapeEdit}
        value={todoTitle}
        className={`${styles.todo} ${styles['todo-edit']}`}
      />
      <CancelIcon onClick={handleCancelEdit} className={styles['cancel-icon']} />
      <Button onClick={handleSaveButtonClick} className={styles['save-btn']}>
        GUARDAR
      </Button>
    </Container>
  ) : (
    <ListItem
      {...props}
      className={`${styles[status]} ${styles.todo}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleDetailsTodoClick}
    >
      <Checkbox onChange={handleCheckboxChange} className={styles.checkbox} />
      <span className={styles['checkbox-custom']} />
      {children}
      {isMouseOver && (
        <Container className={styles['icon-wrapper']}>
          <EditIcon onClick={handleEditTodo} /> <IconDelete onClick={handleIconDeleteClick} />
        </Container>
      )}
    </ListItem>
  )
}

export default Todo
