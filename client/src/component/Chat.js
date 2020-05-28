import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';


const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])


  const ENDPOINT = 'http://localhost:5000'

  useEffect(() => {
    const { name } = queryString.parse(location.search);
    const socket = io(ENDPOINT);
    setName(name);
    console.log(socket);
  });

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    
    setMessages([...messages, `${name}: ${message}`])

    setMessage('')
  };

  return(
    <div>
      <h1>Chat</h1>
      <div className="message-box">
        <div>Welcome {name} to the room</div>
        <div className="display-message-container">{messages.map((mes) => {return(<div className="display-message">{mes}</div>)})}</div>
      </div>
      <input type="text" className="chat-input" placeholder="Enter message here" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmitMessage}>Submit</button>
    </div>
  );
}

export default Chat;
