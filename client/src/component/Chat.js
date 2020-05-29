import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'
let socket
const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const ENDPOINT = 'http://localhost:5000'

  useEffect(() => {
    const { name } = queryString.parse(location.search)
    socket = io(ENDPOINT)
    setName(name)
    socket.emit('join', { name })
    console.log(name)
  }, [ENDPOINT, location.search])

  const handleSubmitMessage = (e) => {
    e.preventDefault()
    socket.emit('message', { name, message })

    setMessages([...messages, `${name}: ${message}`])

    setMessage('')
  }

  return (
    <div>
      <h1>Chat</h1>
      <div className="message-box">
        <div>Welcome {name} to the room</div>
        <div className="display-message-container">
          {messages.map((mes, index) => {
            return (
              <div className="display-message" key={index}>
                {mes}
              </div>
            )
          })}
        </div>
      </div>
      <input
        type="text"
        className="chat-input"
        placeholder="Enter message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSubmitMessage}>Submit</button>
    </div>
  )
}

export default Chat
