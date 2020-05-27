import React from 'react'

const Container = ({ children, ...props }) => {
  return <div {...props}>{children}</div>
}

export default Container
