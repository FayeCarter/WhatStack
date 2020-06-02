import React, { useState } from 'react'

const MessageInput = ({ handleSubmitMessage }) => {
  const [message, setMessage] = useState('')

  const handleButtonClick = (e) => {
    e.preventDefault()
    handleSubmitMessage(message)
    setMessage('')
  }

  return (
    <div>
      <textarea
        className="chat-input"
        placeholder="Enter message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div>
        <button onClick={handleButtonClick}>Send</button>
      </div>
    </div>
  )
}

export default MessageInput
