import actionCreatorFactory from 'typescript-fsa'

const createAction = actionCreatorFactory()

export const addTodoAction = createAction<string>('ADD_TODO')
export const removeTodoAction = createAction<string>('REMOVE_TODO')
export const toggleTodoAction = createAction<string>('TOGGLE_TODO')
