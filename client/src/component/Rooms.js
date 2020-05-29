import React, { useState } from "react";
import { Link } from "react-router-dom";

const Rooms = ({ setRoom }) => {
  const [userRoom, setUserRoom] = useState("");
  return (
    <div>
      <h1>Whatstack</h1>
      <div className="topic-box">
        <div>Welcome to Whatstack</div>
      </div>
      <input
        type="text"
        onChange={(event) => {
          setUserRoom(event.target.value);
        }}
        className="chat-input"
        placeholder="What is on your mind?"
      />
      <Link
        to="/chat"
        onClick={() => {
          setRoom(userRoom);
        }}
      >
        <button>Submit</button>
      </Link>
      <div className="room-list">
        <ul className="">
          <li>
            <Link
              to="/chat"
              onClick={() => {
                setRoom("Ruby");
              }}
            >
              Ruby
            </Link>
          </li>

          <li>
            <Link
              to="/chat"
              onClick={() => {
                setRoom("Javascript");
              }}
            >
              Javascript
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rooms;
