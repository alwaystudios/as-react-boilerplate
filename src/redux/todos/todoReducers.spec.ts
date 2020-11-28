import { testTodo } from '../../../test/testTodo'
import { addTodoAction, removeTodoAction, toggleTodoAction } from './todoActions'
import { todos } from './todoReducters'

describe('todo reducers', () => {
  it('adds a new todo', () => {
    const newState = todos([], addTodoAction('some task'))
    expect(newState).toMatchObject([
      {
        id: expect.any(String),
        content: 'some task',
        completed: false,
      },
    ])
  })

  it('removes a todo', () => {
    const todo = testTodo('some task')
    const newState = todos([todo], removeTodoAction(todo.id))
    expect(newState).toEqual([])
  })

  it('toggles a todo', () => {
    const todo = testTodo('some task')
    const newState = todos([todo], toggleTodoAction(todo.id))
    expect(newState).toMatchObject([
      {
        ...todo,
        completed: true,
      },
    ])
  })
})
