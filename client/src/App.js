import React, { Component, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Join from './component/Join.js'
import Chat from './component/Chat.js'
import Login from './component/Login.js'
import queryString from 'query-string'

const App = ({ location }) => {
  const [userName, setUserName] = useState('')
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/Login" exact component={Login} />
    </Router>
  )
}

const fetchMessage = async (code) => {
  const response = await fetch(`localhost:5000/login/callback?code=${code}`)
  const resultObject = await response.json()
  const user = resultObject.user
  console.log(user)
}

useEffect(() => {
  const { code } = queryString.parse(location.search)
  fetchMessage(code)
}, [location.search])

export default App
// import './App.css';

// import User from "./component/User.js"

// class App extends Component {

//   state = {
//     message: ''
//   }

//   componentDidMount() {
//     this.fetchMessage()
//   }

//   fetchMessage = async () => {
//     const response = await fetch('/api/')
//     const resultObject = await response.json()
//     const message = resultObject.message
//     this.setState({ message })
//   }

//   render() {
//     return (
//       <div>
//         <p>{this.state.message}</p>
//         <User />
//       </div>

//     )
//   }
// }
