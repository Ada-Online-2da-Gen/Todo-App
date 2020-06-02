import React, { useState } from 'react'
import ListItem from 'components/ListItem/ListItem'

const Todo = ({ icon, children, ...props }) => {
  const [visible, setVisible] = useState(false)
  const handleMouseEnter = () => setVisible(true)

  const handleMouseLeave = () => setVisible(false)
  return (
    <ListItem {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {visible && icon}
    </ListItem>
  )
}

export default Todo
