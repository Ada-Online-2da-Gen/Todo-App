import React from 'react'

const TodoList = ({ children, ...props }) => {
  return <ul {...props}>{children}</ul>
}

export default TodoList
