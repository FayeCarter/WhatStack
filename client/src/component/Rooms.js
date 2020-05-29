import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { Link } from "react-router-dom";
let socket;
const Rooms = ({ location }) => {
  return (
    <div>
      <h1>Whatstack</h1>
      <div className="topic-box">
        <div>Welcome to Whatstack</div>
      </div>
      <input
        type="text"
        className="chat-input"
        placeholder="What is on your mind?"
      />
      <button>Submit</button>
    </div>
  );
};

export default Rooms;
