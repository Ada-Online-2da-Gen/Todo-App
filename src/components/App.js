import React from 'react'
import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import List from 'components/List/List'
import ListItem from 'components/ListItem/ListItem'

const App = () => {
  return (
    <Container>
      <Input />
      <List>
        <ListItem>Poner estilos</ListItem>
        <ListItem>Armar componentes</ListItem>
        <ListItem>Agregar funcionalidad</ListItem>
      </List>
    </Container>
  )
}

export default App
