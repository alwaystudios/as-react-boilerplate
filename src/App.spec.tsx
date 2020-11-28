import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { configureStore } from './redux/store'
import { Router } from 'react-router-dom'

describe('App', () => {
  it('renders', () => {
    const history = createMemoryHistory()
    const store = configureStore()

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    )

    history.push('/todos')

    expect(getByText('Todo List')).toBeInTheDocument()
  })
})
