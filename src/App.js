import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar'

/*
function App() {
  return (
    <div className="App">

    </div>
  );
} */

class App extends Component{
  render(){
    return(
      <div>
        <NavBar />
      </div>
    )
  }
}

export default App;
