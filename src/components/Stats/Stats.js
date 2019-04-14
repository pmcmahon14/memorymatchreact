import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';
import Menu from '../../Container/Menu/Menu';
import './Stats.css';

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
                    <Col className='stats'>
                        <Menu/>
                    </Col>
                    <Col>
                        <p className='stats'>Matches<br/>0</p>
                    </Col>
                    <Col>
                        <p className='stats'>Attempts<br/>0</p>
                    </Col>
                    <Col>
                        <p className='stats'>Accuracy<br/>0</p>
                    </Col>
                    <Col>
                        <p className='stats'>Wins<br/>0</p>
                    </Col>
                    <Col className='stats'>
                        <button type='button' className='btn btn-danger btn-sm'>Reset</button>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default stats;