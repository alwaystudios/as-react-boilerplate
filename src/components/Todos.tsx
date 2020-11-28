import { FunctionComponent, useState } from 'react'
import React, { useDispatch, useSelector } from 'react-redux'
import { isFeatureEnabled } from '../redux/features/features'
import { getFeatures } from '../redux/features/featureSelectors'
import { addTodoAction, removeTodoAction, toggleTodoAction } from '../redux/todos/todoActions'
import { getTodos } from '../redux/todos/todoSelectors'

export const Todos: FunctionComponent = () => {
  const features = useSelector(getFeatures)
  const todoList = useSelector(getTodos)
  const [newTodo, setNewTodo] = useState<string>('')
  const dispatch = useDispatch()
  return (
    <>
      <h1>Todo List</h1>
      {isFeatureEnabled(features, 'todov2') && <p>todo v2 feature is enabled</p>}

      {todoList.map((todo) => (
        <div key={todo.id}>
          <label htmlFor={`todo-${todo.id}`}>{todo.content}</label>
          <input
            id={`todo-${todo.id}`}
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodoAction(todo.id))}
          />
          <button onClick={() => dispatch(removeTodoAction(todo.id))}>delete</button>
        </div>
      ))}
      <input value={newTodo} onChange={(event) => setNewTodo(event.currentTarget.value)} />
      <button
        disabled={!newTodo.length}
        onClick={() => {
          dispatch(addTodoAction(newTodo))
          setNewTodo('')
        }}
      >
        Add todo
      </button>
    </>
  )
}
