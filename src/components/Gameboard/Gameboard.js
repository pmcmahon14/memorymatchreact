import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import Timer from './Timer/Timer';
import Title from './Title/Title';
import classes from './Gameboard.module.css';



class Gameboard extends Component {
    state = {
        /*levels: {
            daytonaDriver: {
                cards: 18,
                colWidth: 2,
                gameLevel: 'Daytona Driver/Driver'
            },
            charlotteDriver: {
                cards: 12,
                colWidth: 3,
                gameLevel: 'Charlotte Driver/Driver'
            },
            bristolDriver: {
                cards: 8,
                colWidth: 3,
                gameLevel: 'Bristol Driver/Driver'
            },
            daytonaCar: {
                cards: 18,
                colWidth: 2,
                gameLevel: 'Daytona Driver/Car'
            },
            charlotteCar: {
                cards: 12,
                colWidth: 3,
                gameLevel: 'Charlotte Driver/Car'
            },
            bristolCar: {
                cards: 8,
                colWidth: 3,
                gameLevel: 'Bristol Driver/Car'
            },
        }*/
        levels: {
            daytonaDriver: 'Daytona Driver/Driver',
            charlotteDriver: 0,
            bristolDriver: 0,
            daytonaCar: 0,
            charlotteCar: 0,
            bristolCar: 0
        }
    };
    render () {
        return (
            <div>
                <Timer/>
                <Title levels={this.state.levels}/>
                <Container fluid>
                    <Row className={classes.rowDaytona}>
                        <Col className='grow'>
                            <img className={classes.front} alt='card' src={require('../../imagebank/drivers/alexbowman.png')}/>
                            {/*<img className='back' alt='cardback' src={require('../../imagebank/logo.png')}/>*/}
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/alexbowman.png')}/>
                            <img className={classes.back} alt='cardback' src={require('../../imagebank/logo.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/chaseelliott.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/chaseelliott.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/jimmiejohnson.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/jimmiejohnson.png')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/austindillon.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/austindillon.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/kevinharvick.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/kevinharvick.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/martintruex.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/martintruex.png')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/joeylogano.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/joeylogano.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/tydillon.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/tydillon.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/aricalmirola.png')}/>
                        </Col>
                        <Col className='grow'>
                            <img className='front' alt='card' src={require('../../imagebank/drivers/aricalmirola.png')}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Gameboard;