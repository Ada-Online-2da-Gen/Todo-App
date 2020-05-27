import React from 'react'

const Title = ({ children, ...props }) => {
  return <h2 {...props}>{children}</h2>
}

export default Title
