import React from 'react'
import logo from '../assets/images/github_logo.png'
import './stylesheet.css'
//require("dotenv").config();

const Join = () => {
  console.log(process.env)
  return (
    <div className="body">
      <div className="content">
        <h1>
          <span className="thin">What</span>
          <span className="thick">stack</span>
        </h1>
        <h2 className="heading">Login with Github to join now!</h2>
        <div>
          <img src={logo} alt="GitHub Logo" className="gitLogo" />
        </div>

        <button
          onClick={() => {
            window.location.href = `${process.env.REACT_APP_BACKEND}/login`
          }}
        >
          Github login
        </button>
      </div>
    </div>
  )
}

export default Join
