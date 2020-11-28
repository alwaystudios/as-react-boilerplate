import { testTodo } from '../../../test/testTodo'
import { getTodos } from './todoSelectors'
import { testState } from '../../../test/testState'

describe('todo selectors', () => {
  it('returns todos', () => {
    const todo = testTodo('some task')
    const state = testState({ todos: [todo] })
    expect(getTodos(state)).toEqual([todo])
  })
})
