import React from 'react'
import ListItem from 'components/ListItem/ListItem'
import Styles from 'components/Todo/todo.module.scss'

const Todo = ({ status, children, ...props }) => {
  let completedStyles = status === 'completed' ? Styles.completed : Styles.pending
  return (
    <ListItem className={completedStyles} {...props}>
      {children}
    </ListItem>
  )
}

export default Todo
