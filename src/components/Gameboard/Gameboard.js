import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import classes from './Gameboard.module.css';

export default function Gameboard({ cards, flipped, handleClick, disabled, solved }) {
    {/*return (
            <div>
                <Container fluid>
                    <Row className={classes.rowDaytona}>
                        <Col className='grow'>
                            <img className={classes.front} alt='card' src={require('../../imagebank/drivers/alexbowman.png')}/>
                            <img className='back' alt='cardback' src={require('../../imagebank/logo.png')}/>
                        </Col>
                        <Col xs='2' className='grow'>
                            <Card
                                className={classes.front}
                                alt='card'
                                back={require(`../../imagebank/logo.png`)}
                                front={require(`../../imagebank/drivers/alexbowman.png`)}
                                flipped={flipped.includes(1)}
                                handleClick={() => handleClick(1)}
                                />
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
        )*/}
        return (
            <div>
                <Container fluid>
                    <Row className='justify-conteent-around'>
                    {cards.map((card) => (
                        <Col xs='2' className='grow'>
                            <Card
                                key={card.id}
                                id={card.id}
                                className={classes.front}
                                alt='card'
                                flipped={flipped.includes(card.id)}
                                handleClick={handleClick}
                                disabled={disabled || solved.includes(card.id)}
                                solved={solved.includes(card.id)}
                                {...card}
                            />
                        </Col>
                    ))}
                    </Row>
                </Container>
            </div>
        )
    };

Gameboard.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
    solved: PropTypes.arrayOf(PropTypes.number).isRequired,
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
};