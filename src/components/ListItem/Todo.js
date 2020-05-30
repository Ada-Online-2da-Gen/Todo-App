import React from 'react'

const Todo = ({ children, ...props }) => {
  return <li {...props}>{children}</li>
}

export default Todo
