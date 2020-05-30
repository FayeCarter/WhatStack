import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [userName, setUserName] = useState('')
  const getUserName = async () => {
    const response = await fetch('/Login')

    const resultObject = await response.json()
    const UserName = resultObject.user.userName
    this.setUserName(UserName)
    console.log(userName)
  }

  return (
    <div>
      <h1>Login</h1>
      <Link onClick={getUserName} to={`http://localhost:5000/login`}></Link>
      <button type="submit">Join</button>
    </div>
  )
}

export default Login
