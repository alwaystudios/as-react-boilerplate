import React from 'react'

export const ErrorFallback: React.FunctionComponent<{
  error?: Error
}> = ({ error }) => {
  console.error(error?.message)
  return (
    <div role="alert">
      <p>Application Error</p>
      <pre>Caused by {error?.message}</pre>
    </div>
  )
}
