import React, {Component} from 'react';
import Card from './Card';
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
                <Card/>
            </div>
        )
    }
};


export default App;