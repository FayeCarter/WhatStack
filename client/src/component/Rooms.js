import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import { Link, useLocation } from "react-router-dom";
let socket;

const Rooms = ({ setRoom, username, setUsername }) => {
  const [userRoom, setUserRoom] = useState("");
  const [roomList, setRoomList] = useState([]);
  const ENDPOINT = "http://localhost:5000";
  let location = useLocation();

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("requestRoomList");
    const searchParams = new URLSearchParams(location.search);
    setUsername(searchParams.get("username"));
  }, []);

  useEffect(() => {
    socket.on("roomList", ({ roomList }) => {
      setRoomList(roomList);
    });
  });

  return (
    <div>
      <h1>Whatstack</h1>
      <div className="topic-box">
        <div>Welcome to Whatstack {username}</div>
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
