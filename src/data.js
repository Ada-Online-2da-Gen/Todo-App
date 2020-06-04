import shortId from 'shortid'

export default [
  {
    id: shortId.generate(),
    text: 'Ir al súper',
    status: 'pending'
  },
  {
    id: shortId.generate(),
    text: 'Comprar comida',
    status: 'pending'
  },
  {
    id: shortId.generate(),
    text: 'Preparar cena',
    status: 'pending'
  }
]
