import React from 'react'
import ListItem from 'components/ListItem/ListItem'

const Todo = ({ children, ...props }) => {
  return <ListItem {...props}>{children}</ListItem>
}

export default Todo
