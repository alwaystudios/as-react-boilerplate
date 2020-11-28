import { addTodoAction, removeTodoAction, toggleTodoAction } from './todoActions'

describe('todo actions', () => {
  it('has add todo action', () => {
    expect(addTodoAction('some task')).toEqual({
      type: 'ADD_TODO',
      payload: 'some task',
    })
  })

  it('has remove todo action', () => {
    expect(removeTodoAction('id-123')).toEqual({
      type: 'REMOVE_TODO',
      payload: 'id-123',
    })
  })

  it('has toggle todo action', () => {
    expect(toggleTodoAction('id-123')).toEqual({
      type: 'TOGGLE_TODO',
      payload: 'id-123',
    })
  })
})
