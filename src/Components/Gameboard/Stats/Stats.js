import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';
import Menu from '../../../Container/Menu/Menu';
import classes from './Stats.module.css';

class stats extends Component {
    state = {
        stats: {
            matches: 0,
            attempts: 0,
            accuracy: 0,
            wins: 0,
            /*other stats in pop-up*/
        },

        levels: {
            daytonaDriver: 'Daytona Driver/Driver',
            charlotteDriver: 'Charlotte Driver/Driver',
            bristolDriver: 'Bristol Driver/Driver',
            daytonaCar: 'Daytona Driver/Car',
            charlotteCar: 'Charlotte Driver/Car',
            bristolCar: 'Bristol Driver/Car'
        },

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
        }
    };

    changeBoard = (type) => {
        const newLevel = this.state.levels[type];
        const newCount = this.state.cardCount[type];
        const newWidth = this.state.width[type];
        console.log(newLevel);
        console.log(newCount);
        console.log(newWidth);
    };
//dynamically generate stats like menu
    render () {
        return (
            <Container fluid>
                <Row>
                    <Col className={classes.stats}>
                        <Menu changeBoard={this.changeBoard}/>
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
            </Container>
        )
    }
}

export default stats;