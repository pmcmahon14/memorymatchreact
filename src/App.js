import React, {Component} from 'react';
import Card from './Card';
//import CardList from './CardList';
//import {images} from './images';
import Stats from './Stats';

class App extends Component {
    render () {
        return (
            <div>
                <Stats/>
                <Card/>
            </div>
        )
    }
};


export default App;