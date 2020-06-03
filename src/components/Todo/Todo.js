import React, { useState } from 'react'
import { BsTrash as IconDelete } from 'react-icons/bs'
import ListItem from 'components/ListItem/ListItem'

const Todo = ({ id, onDelete, children, ...props }) => {
  const [isMouseOver, setIsMouseOver] = useState(false)
  const handleMouseEnter = () => setIsMouseOver(true)
  const handleMouseLeave = () => setIsMouseOver(false)
  const handleIconDeleteClick = () => onDelete(id)

  return (
    <ListItem {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isMouseOver && <IconDelete onClick={handleIconDeleteClick} />}
    </ListItem>
  )
}

export default Todo
