import React from 'react';
import {connect} from 'react-redux';

import {matchCounter, attemptsCounter, accuracyCalculator, winsCounter} from '../../redux/stats/stats.actions';  //{addItem...}
import {Container, Row, Col} from 'reactstrap';
import Menu from '../../Container/Menu/Menu';
import classes from './Stats.module.css';

const Stats = ({id, matchCount, matchCounter}) => (
    <div>
            <Container fluid>
                <Row>
                    <Col className={classes.stats}>
                        <Menu/>
                    </Col>
                    <Col>
                        <p className={classes.stats} onChange={matchCounter(matchCount)}>Matches<br/>0</p>
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
    </div>
        );



const mapDispatchToProps = dispatch => ({
    matchCounter: matchCount => dispatch(matchCounter(matchCount))  //addItem: item  (addItem(item))
});

export default connect(0, mapDispatchToProps)(Stats);  //