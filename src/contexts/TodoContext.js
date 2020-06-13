import React, { useState, createContext } from 'react'
import useArray from 'hooks/useArray'
import todosList from 'data'
/**
 * Patrón de Contexto
 *
 * 1. Crear un componente funcional que sea NombreContextoProvider
 * 2. Este componente tiene que aceptar children
 * 3. Creamos un contexto
 * 4. El componente funcional devuelve el provider del contexto
 * 5. Ese provider debe incluir los children
 * 6. Dentro de NUESTRO componente, definimos toda la lógica, estados, valores y funciones que queremos que el provider comparta
 * 7. Definir el value (lo que comparte) el provider del contexto
 * 8. Exportar el contexto y nuestro componente
 */

const TodoContext = createContext()

const TodoProvider = ({ children }) => {
  const [todos, todoActions] = useArray(todosList)
  const [statusFilter, setStatusFilter] = useState('all')

  const getPendingTodos = () => todos.filter((todo) => todo.status !== 'completed')

  return (
    <TodoContext.Provider
      value={{
        todos,
        updateTodoById: todoActions.updateTodoById,
        removeTodoById: todoActions.removeById,
        statusFilter,
        setStatusFilter,
        getPendingTodos,
        todoActions
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoProvider }
export default TodoContext
