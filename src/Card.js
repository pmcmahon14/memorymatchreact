import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';
import './index.css';

class Card extends Component {
    render () {
        return (
            <div>
                <Container fluid>
                <Row>
                    <Col>
                        <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        <img className='back' alt='cardback' src={require('./imagebank/logo.png')}/>
                    </Col>
                    <Col>
                        <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                    </Col>
                    <Col>
                        <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                    </Col>
                    <Col>
                        <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                    </Col>
                    <Col>
                        <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                    </Col>
                    <Col>
                        <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                    </Col>
                </Row>
                    <Row>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                        <Col>
                            <img className='front' alt='card' src={require('./imagebank/drivers/alexbowman.png')}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default Card;