import React, { Component } from 'react';
import './App.css';

import User from "./component/user.js"

class App extends Component {

  state = {
    message: ''
  }


  componentDidMount() {
    this.fetchMessage()
  }

  fetchMessage = async () => {
    const response = await fetch('/api/')
    const resultObject = await response.json()
    const message = resultObject.message
    this.setState({ message })
  }

  render() {
    return (
      <div> 
        <p>{this.state.message}</p>
        <User />
      </div>
      
    )
  }
}
export default App;
