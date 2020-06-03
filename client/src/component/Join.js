import React from 'react'
import logo from '../images/github-logo.png'

const Join = () => {
  console.log(process.env)
  return (
    <div className="joinOuter">
      <div className="joinContainer">
        <h2>Welcome to WhatStack</h2>
        <img src={logo} alt="Logo" style={{ width: 80, height: 80 }} />
        <button
          className="joinButton"
          onClick={() => {
            window.location.href = `${process.env.REACT_APP_BACKEND}/login`
          }}
        >
          Join with GitHub
        </button>
      </div>
    </div>
  )
}

export default Join
