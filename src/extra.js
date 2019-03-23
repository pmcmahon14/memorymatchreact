//Card.js
import React, {Component} from 'react';
//import Container from './Container';
import {Container, Col} from 'reactstrap';
import './index.css';

const Card = ({driver}) => {
    return (
        <Container fluid>
            {/*tachyons here only for development*/}
            <div className='tc dib br3 ma2 grow bw2 shadow-5'>
                <Col xs="2">
                    <div>
                        <img className='front' alt='card' src={require(`./${driver}`)} />
                    </div>
                    <div>
                        <img className='back' alt='logo' src={require(`./imagebank/logo.png`)}/>
                    </div>
                </Col>
            </div>
        </Container>
    )
};

export default Card;

//index.js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CardList from './CardList';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import {images} from './images';

ReactDOM.render(
    <CardList images={images}/>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
