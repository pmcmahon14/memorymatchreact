import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Menu />
          {/*<Stats />
          <Gameboard />*/}
      </div>
    );
  }
}

export default App;
