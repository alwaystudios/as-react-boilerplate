import React, { useState } from 'react'

const ws = new WebSocket('ws://localhost:3001')

export const Sockets: React.FC = () => {
  const [message, setMessage] = useState<string>('')
  const [serverMessage, setServerMessage] = useState<string>('')

  // eslint-disable-next-line functional/immutable-data
  ws.onmessage = (event) => setServerMessage(event.data)

  const sendMessage = () => {
    ws.send(message)
  }

  return (
    <div>
      <input value={message} onChange={(event) => setMessage(event.currentTarget.value)} />
      <button onClick={sendMessage}>send message to the server</button>
      <div>message from server = {serverMessage}</div>
    </div>
  )
}
