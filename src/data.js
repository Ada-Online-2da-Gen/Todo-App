import shortId from 'shortid'

export default [
  {
    id: shortId.generate(),
    title: 'Ir al súper',
    status: 'pending'
  },
  {
    id: shortId.generate(),
    title: 'Comprar comida',
    status: 'pending'
  },
  {
    id: shortId.generate(),
    title: 'Preparar cena',
    status: 'pending'
  }
]
