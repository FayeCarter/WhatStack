import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import languageArray from "./languages"

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
      setMessages([...messages, [name, message]]);
    });
  });

  function formatMessage(msg) {
    const startCode = msg.slice(0, 3) === "```";
    const endCode = msg.slice(msg.length - 3) === "```";

    if (startCode && endCode) {
      let code = msg.slice(3, msg.length - 3);
      let language = "";
      console.log('in the loop')
      console.log(msg.match(/^(```([\w-]+)).*(```)$/));
      if (msg.match(/^(```([\w-]+)).*(```)$/)) {
        console.log("in the conditional")
        language = msg.match(/^(```([\w-]+)).*(```)$/)[2]
      }
      const languageBoolean = languageArray.includes(language)
      if (!languageBoolean) {
        language = "javascript"
      } else {
        code = code.slice(language.length)
      }
      return (
        <SyntaxHighlighter language={language} style={docco}>
          {code}
        </SyntaxHighlighter>
      );
    } else {
      return msg;
    }
  }

  return (
    <div>
      <h1>{room} Chat</h1>
      <div className="message-box">
        <div>Welcome {username} to the room</div>
        <div className="display-message-container">
          {messages.map((mes, index) => {
            return (
              <div className="display-message" key={index}>
                <div>{mes[0]}</div>
                {formatMessage(mes[1])}
              </div>
            );
          })}
        </div>
      </div>
      <textarea
        className="chat-input"
        placeholder="Enter message here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSubmitMessage}>Submit</button>
    </div>
  );
};

export default Chat;
