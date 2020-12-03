import { render } from '@testing-library/react'
import React from 'react'
import { ErrorFallback } from './ErrorFallback'

test('error fallback', () => {
  const error = new Error('App error')
  const { getByText } = render(<ErrorFallback error={error} />)
  expect(getByText('Application Error')).toBeInTheDocument()
  expect(getByText('Caused by App error')).toBeInTheDocument()
})
