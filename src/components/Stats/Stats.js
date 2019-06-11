import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';
import Menu from '../../Container/Menu/Menu';
import classes from './Stats.module.css';

class stats extends Component {
    state = {
        stats: {
            matches: 0,
            attempts: 0,
            accuracy: 0,
            wins: 0,
            /*other stats in pop-up*/
        }
    };

    render () {
        return (
            <Container fluid>
                <Row>
                    <Col className={classes.stats}>
                        <Menu/>
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