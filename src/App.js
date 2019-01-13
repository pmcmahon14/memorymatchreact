import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img className="background" src={require("./components/Images/background/Jimmie_2048x1309.jpg")}/>
          <Menu />
          {/*<Stats />
          <Gameboard />*/}
      </div>
    );
  }
}

export default App;
