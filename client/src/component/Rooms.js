import React from "react";
import { Link } from "react-router-dom";

const Rooms = ({ setRoom }) => {
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
      <div class="room-list">
        <ul class="">
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
