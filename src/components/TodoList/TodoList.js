import React, { useContext } from 'react'
import List from 'components/List/List'
import Todo from 'components/Todo/Todo'
import TodoContext from 'contexts/TodoContext'

const TodoList = ({ ...props }) => {
  const { todos, updateTodoById, removeTodoById, statusFilter } = useContext(TodoContext)

  const handleUpdateTodo = (id, title) => {
    updateTodoById(id, { title })
  }

  const handleStatusChange = (id, status) => {
    updateTodoById(id, { status })
  }

  const handleDeleteTodo = (id) => {
    removeTodoById(id)
  }

  const handleDetailsTodoClick = (id) => {
    //const selectedTodo = todos.find((todo) => todo.id === id)
    //setTodoModal(selectedTodo)
    //setIsModalShown(true)
  }

  const filterTodosByStatus = (todo) => {
    return statusFilter === 'all' ? true : todo.status === statusFilter
  }

  return (
    <List style={{ listStyle: 'none', paddingLeft: 0 }} {...props}>
      {todos.filter(filterTodosByStatus).map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          status={todo.status}
          onStatusChange={handleStatusChange}
          onTitleUpdate={handleUpdateTodo}
          onDelete={handleDeleteTodo}
          onDetailsTodoClick={handleDetailsTodoClick}
        >
          {todo.title}
        </Todo>
      ))}
    </List>
  )
}

export default TodoList
