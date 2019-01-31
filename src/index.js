import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/Card/Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {images} from './images';

ReactDOM.render(
    <div>
        <Card driver={images[0].driver}/>
        <Card driver={images[3].driver}/>
        <Card driver={images[6].driver}/>
    </div>
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
