import React from 'react'
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
        <h2>Login with Github to join now!</h2>

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
