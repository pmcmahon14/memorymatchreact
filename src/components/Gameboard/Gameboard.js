import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import PropTypes from 'prop-types';

import Card from '../Card/Card';
import './Gameboard.module.css';

export default function Gameboard({ cards, flipped, handleClick, disabled, solved }) {
    const width = 2;

    return (
            <div>
                <Container fluid>
                    <Row className='justify-content-around rowDaytona'>
                    {cards.map((card) => (
                        <Col xs={width} className='grow'>
                            <Card
                                key={card.id}
                                id={card.id}
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