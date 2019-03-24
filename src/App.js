import React, {Component} from 'react';
import Gameboard from './Gameboard';
//import CardList from './CardList';
//import {images} from './images';
import Timer from './Timer';
import Stats from './Stats';

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