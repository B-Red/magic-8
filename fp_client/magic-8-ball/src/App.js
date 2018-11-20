import React, { Component } from 'react';
import './App.css';
import AnswerDisplay from './Components/AnswerDisplay';

class App extends Component {
  constructor(){
    super()
      this.state = {
        randomAnswer : null,
    }
  }
  
  async componentDidMount() {
    fetch('http://localhost:3001/return')
      .then(response => response.json())
      .then(randomAnswer => this.setState({ randomAnswer }));
  }
  
  
  
  
  render() {
    console.log(this.state)
    return (
      <div>
        { this.state.randomAnswer ?
        <AnswerDisplay randomAnswer={this.state.randomAnswer} /> : 
        <div>loading...</div>
        }
      </div>
    );
  }
}

export default App;
