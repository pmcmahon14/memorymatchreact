import React, {Component} from 'react';
import Gameboard from './components/Gameboard/Gameboard';
//import CardList from './CardList';
//import {images} from './images';
import Timer from './components/Timer/Timer';
import Stats from './components/Stats/Stats';

class App extends Component {
    render () {
        return (
            <div>
                <Stats/>
                <Timer/>
                <Gameboard/>
            </div>
        )
    }
};


export default App;