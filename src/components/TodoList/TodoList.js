import React from 'react'
import List from 'components/List/List'

const TodoList = ({ children, ...props }) => {
  return <List {...props}>{children}</List>
}

export default TodoList
