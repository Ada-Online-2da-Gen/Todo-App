import React from 'react'
import List from 'components/List/List'

const TodoList = ({ children, ...props }) => {
  return (
    <List style={{ listStyle: 'none', paddingLeft: 0 }} {...props}>
      {children}
    </List>
  )
}

export default TodoList
