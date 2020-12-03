import React, { FunctionComponent } from 'react'
import { FallbackProps } from 'react-error-boundary'

export const ErrorFallback: FunctionComponent<FallbackProps> = ({ error }) => {
  console.error(error?.message)
  return (
    <div role="alert">
      <p>Application Error</p>
      <pre>Caused by {error?.message}</pre>
    </div>
  )
}
