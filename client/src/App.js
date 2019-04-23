import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";





class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xml: null
    }
  }
  backend =() =>{
    console.log('Sending Backend')
    axios.get("http://localhost:1984/server/findSpell", 5).then((res)=>{
      console.log(res.data)
    })
  }
  render() {
    return (
      <div className="App">
        <button onClick={()=>this.backend()}>Test</button>
        <div>{this.state.xml}</div>
      </div>
    );
  }
}

export default App;
