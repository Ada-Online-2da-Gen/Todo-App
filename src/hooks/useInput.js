import { useState } from 'react'

const useInput = (initialState) => {
  const [value, setValue] = useState(initialState)

  const update = (event) => {
    setValue(event.target.value)
  }

  const clear = () => {
    setValue('')
  }

  return [value, update, clear]
}

export default useInput
