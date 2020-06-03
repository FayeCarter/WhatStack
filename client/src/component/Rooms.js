import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { Link } from 'react-router-dom'
import cookie from 'react-cookies'
let socket

const Rooms = ({ setRoom, username, setUsername }) => {
  const [userRoom, setUserRoom] = useState('')
  const [roomList, setRoomList] = useState([])
  const ENDPOINT = process.env.ENDPOINT

  useEffect(() => {
    socket = io(ENDPOINT)
    socket.emit('requestRoomList')
    setUsername(cookie.load('githubname'))
  }, [])

  useEffect(() => {
    socket.on('roomList', ({ roomList }) => {
      setRoomList(roomList)
    })
  })

  return (
    <div className="roomContainer">
      <div className="topic-box">
        <h2>Hi, {username}!</h2>
        <h2>Join a chat or create one</h2>
      </div>
      <div className="roomInput">
        <input
          type="text"
          onChange={(event) => {
            setUserRoom(event.target.value)
          }}
          className="chat-input"
          placeholder="What do you want to chat?"
        />
        <Link
          to="/chat"
          onClick={() => {
            setRoom(userRoom)
          }}
        >
          <button className="roomButton">Join</button>
        </Link>
      </div>
      <div className="room-list">
        <div>
          {roomList.map((room, index) => {
            return (
              <div className="rectangle" key={index}>
                <Link
                  to="/chat"
                  onClick={() => {
                    setRoom(room)
                  }}
                >
                  {room}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Rooms
