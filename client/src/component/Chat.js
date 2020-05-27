import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';


const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const ENDPOINT = 'http://localhost:5000'
  useEffect(() => {
    const { name } = queryString.parse(location.search),
    socket = io(ENDPOINT);
    setName(name);
    console.log(socket);
  });

  return(
    <div>
    <h1>Chat</h1>
    </div>
  )
}


export default Chat