import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import io from "socket.io-client";
let socket;

const Chat = ({ username, room }) => {
  const [name] = useState(username);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "http://whatstack.herokuapp.com";

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { name, room });
  }, [ENDPOINT, name, room]);

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    socket.emit("message", { name, message, room });
    setMessage("");
  };

  useEffect(() => {
    socket.on("message", ({ name, message }) => {
      setMessages([...messages, `${name}: ${message}`]);
    });
  });

  return (
    <div>
      <h1>{room} Chat</h1>
      <div className="message-box">
        <div>Welcome {username} to the room</div>
        <div className="display-message-container">
          {messages.map((mes, index) => {
            return (
              <div className="display-message" key={index}>
              <ReactMarkdown source={mes}/>
              </div>
            );
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
      <ReactMarkdown source={"## Hello"}/>
    </div>
  );
};

export default Chat;
