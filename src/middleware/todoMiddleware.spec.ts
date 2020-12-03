import { State } from '../redux/state'
import configureStore from 'redux-mock-store'
import { addTodoAction } from '../redux/todos/todoActions'
import { todoMiddleware } from './todoMiddleware'
import { testTodo } from '../../test/testTodo'
import { waitFor } from '@testing-library/react'
import * as apiGetTodosModule from '../redux/todos/getTodos'

const apiGetTodos = jest.spyOn(apiGetTodosModule, 'apiGetTodos')
const todos = [testTodo('todo1'), testTodo('todo2'), testTodo('todo3')]

const testStore = (state: DeepPartial<State>) => {
  const mockStore = configureStore([todoMiddleware()])
  return mockStore(state)
}

describe('todoMiddleware', () => {
  it('calls get categories on add todo action', async () => {
    apiGetTodos.mockResolvedValue(todos)
    const store = testStore({ todos: [testTodo('test1')] })

    const addTodo = addTodoAction('test')
    store.dispatch(addTodo)

    await waitFor(() => {
      // const actions = store.getActions()
      expect(apiGetTodos).toHaveBeenCalledTimes(1)
    })
  })
})
