import React, { useState } from 'react'

import ListItem from 'components/ListItem/ListItem'

const Todo = ({ icon, children, ...props }) => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const handleMouseEnter = () => setIsMouseOver(true)

  const handleMouseLeave = () => setIsMouseOver(false)
  return (
    <ListItem {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isMouseOver && icon}
    </ListItem>
  )
}

export default Todo
