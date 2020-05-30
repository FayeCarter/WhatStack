import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./component/Join.js";
import Chat from "./component/Chat.js";
import Rooms from "./component/Rooms.js";

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route
        path="/chat"
        exact
        render={({ props }) => (
          <Chat {...props} username={username} room={room} />
        )}
      />
      <Route
        path="/rooms"
        exact
        render={({ props }) => (
          <Rooms
            {...props}
            setRoom={setRoom}
            setUsername={setUsername}
            username={username}
          />
        )}
      />
    </Router>
  );
};

export default App;
