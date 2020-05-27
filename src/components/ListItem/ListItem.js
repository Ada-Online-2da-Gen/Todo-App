import React from 'react'

const ListItem = ({ children, ...props }) => {
  return <li {...props}>{children}</li>
}

export default ListItem
