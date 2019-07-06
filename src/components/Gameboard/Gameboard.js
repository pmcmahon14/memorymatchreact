import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

import Menu from '../../Container/Menu/Menu';
//import Stats from './Stats/Stats';
import Timer from './Timer/Timer';
import Title from './Title/Title';
import classes from './Gameboard.module.css';

class Gameboard extends Component {

    state = {
        levels: {
            daytonaDriver: 0,
            charlotteDriver: 0,
            bristolDriver: 0,
            daytonaCar: 0,
            charlotteCar: 0,
            bristolCar: 0
        }/*,

        cardCount: {
            daytonaDriver: 18,
            charlotteDriver: 12,
            bristolDriver: 8,
            daytonaCar: 18,
            charlotteCar: 12,
            bristolCar: 8
        },

        width: {
            daytonaDriver: 2,
            charlotteDriver: 3,
            bristolDriver: 3,
            daytonaCar: 2,
            charlotteCar: 3,
            bristolCar: 3
        }*/
    };

    changeBoard = (type) => {
        const oldLevel = this.state.levels[type];
        const newCount = oldLevel + 1;
        const newLevel = {
            ...this.state.levels
        };
        newLevel[type] = newCount;
        //160@3:30 for cards and width
        this.setState({levels: newLevel});

        //const newCount = this.state.cardCount[type];
        //const newWidth = this.state.width[type];
        //console.log(newCount);
        //console.log(newWidth);
        //this.setState({levels: newLevel});
    };

    render () {
        return (
            <div>
                <Row>
                    <Col className={classes.stats}>
                        <Menu changed={this.changeBoard}/>
                    </Col>
                    <Col>
                        <p className={classes.stats}>Matches<br/>0</p>
                    </Col>
                    <Col>
                        <p className={classes.stats}>Attempts<br/>0</p>
                    </Col>
                    <Col>
                        <p className={classes.stats}>Accuracy<br/>0</p>
                    </Col>
                    <Col>
                        <p className={classes.stats}>Wins<br/>0</p>
                    </Col>
                    <Col className={classes.stats}>
                        <button type='button' className='btn btn-danger btn-sm'>Reset</button>
                    </Col>
                </Row>
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