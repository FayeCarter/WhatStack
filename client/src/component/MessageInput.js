import React, { useState } from 'react'

const MessageInput = ({ handleSubmitMessage }) => {
  const [message, setMessage] = useState('')

  const handleButtonClick = (e) => {
    e.preventDefault()
    handleSubmitMessage(message)
    setMessage('')
  }

  return (
    <div className="roomInput">
      <textarea
        className="chat-input"
        placeholder="Enter message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="chatButton" onClick={handleButtonClick}>
        Post
      </button>
    </div>
  )
}

export default MessageInput
