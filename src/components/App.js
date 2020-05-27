import React from 'react'
import Container from 'components/Container/Container'
import Input from 'components/Input/Input'
import List from 'components/List/List'
import ListItem from 'components/ListItem/ListItem'
import Button from 'components/Button/Button'

const App = () => {
  return (
    <Container>
      <Container>
        <Input />
        <Button className="button">Agregar</Button>
      </Container>
      <List>
        <ListItem>Poner estilos</ListItem>
        <ListItem>Armar componentes</ListItem>
        <ListItem>Agregar funcionalidad</ListItem>
      </List>
    </Container>
  )
}

export default App
