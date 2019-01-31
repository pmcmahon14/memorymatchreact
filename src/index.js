import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Card from './components/Card/Card';
import Card from './Card';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {images} from './images';

ReactDOM.render(
    <div>
        <Card id={images[0].id} driver={images[0].driver} car={images[0].car}/>
        <Card id={images[1].id} driver={images[1].driver} car={images[1].car}/>
        <Card id={images[2].id} driver={images[2].driver} car={images[2].car}/>
    </div>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
