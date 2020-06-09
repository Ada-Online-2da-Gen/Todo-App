import React from 'react'
import { MdClose as CloseIcon } from 'react-icons/md'
import Title from 'components/Title/Title'
import Text from 'components/Text/Text'
import Container from 'components/Container/Container'
import styles from 'components/Modal/modal.module.scss'

const TODO_STATUS = {
  pending: 'pendiente',
  completed: 'completada'
}
const Modal = ({ item, onClose, ...props }) => {
  return (
    <Container className={styles.overlay} onClick={onClose}>
      <Container className={styles.modalContainer}>
        <Title>Titulo: {item.title}</Title>
        <CloseIcon className={styles.closeIcon} onClick={onClose} />
        <Text>Estado: {TODO_STATUS[item.status]}</Text>
      </Container>
    </Container>
  )
}
export default Modal
