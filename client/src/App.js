import React, { Component } from 'react';
import './App.css';

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
      <p>{this.state.message}</p>
    )
  }
}
export default App;
