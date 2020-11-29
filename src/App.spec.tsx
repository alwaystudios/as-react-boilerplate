import React from 'react'
import { render, waitFor } from '@testing-library/react'
import App from './App'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { configureStore } from './redux/store'
import { Router } from 'react-router-dom'
import { deleteCookie } from './hooks/useCookie'

describe('App', () => {
  beforeEach(() => deleteCookie('features'))

  it('renders todo list', () => {
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

  it('renders todo list v2', async () => {
    const history = createMemoryHistory()
    const store = configureStore()

    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    )

    history.push('/todos?feature=todov2|true')

    await waitFor(() => {
      expect(getByText('Todo List')).toBeInTheDocument()
      expect(getByText('todo v2 feature is enabled')).toBeInTheDocument()
    })
  })

  it('sets feature state', async () => {
    const history = createMemoryHistory()
    const store = configureStore()

    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    )

    history.push('/features?feature=test1|true&feature=test2|false')

    await waitFor(() => {
      expect(container.querySelector('div.features')?.innerHTML).toBe(
        '{"test1":"true","test2":"false"}',
      )
    })
  })
})
