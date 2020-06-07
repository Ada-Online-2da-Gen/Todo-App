import React from 'react'
import { MdClose as CloseIcon } from 'react-icons/md'
import Title from 'components/Title/Title'
import Text from 'components/Text/Text'
import Container from 'components/Container/Container'
import styles from 'components/Modal/modal.module.scss'

const Modal = ({ item, onCloseModal, ...props }) => {
  const handleClick = () => onCloseModal()
  const ESTADO = {
    pending: 'pendiente',
    completed: 'completada'
  }
  return (
    <Container className={styles.background} onClick={onCloseModal}>
      <Container className={styles.modalContainer}>
        {console.log(item)}
        <Title>Titulo: {item.text}</Title>
        <CloseIcon className={styles.closeIcon} onClick={handleClick} />
        <Text>Estado: {ESTADO[item.status]}</Text>
      </Container>
    </Container>
  )
}
export default Modal
