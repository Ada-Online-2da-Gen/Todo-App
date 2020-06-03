import React from 'react'
import ListItem from 'components/ListItem/ListItem'
import Checkbox from 'components/Checkbox/Checkbox'
import styles from 'components/Todo/todo.module.scss'

const Todo = ({ onStatusChange, id, status, children, ...props }) => {
  const handleCheckboxChange = (event) => {
    const status = event.target.checked ? 'completed' : 'pending'
    onStatusChange(status, id)
  }

  return (
    <ListItem className={styles[status]} {...props}>
      <Checkbox onChange={handleCheckboxChange} />
      {children}
    </ListItem>
  )
}

export default Todo
