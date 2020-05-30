import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Link } from "react-router-dom";
let socket;

const Rooms = ({ setRoom }) => {
  const [userRoom, setUserRoom] = useState("");
  const [roomList, setRoomList] = useState([]);
  const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("requestRoomList");
  }, []);

  useEffect(() => {
    socket.on("roomList", ({ roomList }) => {
      setRoomList(roomList);
      console.log("roomlist");
      console.log(roomList);
    });
  });

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
        <div>
          {roomList.map((room, index) => {
            return (
              <div key={index}>
                <Link
                  to="/chat"
                  onClick={() => {
                    setRoom(room);
                  }}
                >
                  {room}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
