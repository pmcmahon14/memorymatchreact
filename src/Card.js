import React from 'react';
//import Container from './Container';
import {Container, Row, Col} from 'reactstrap';
import './index.css';

const Card = ({driver, car}) => {
    return (
        <Container fluid>
            {/*tachyons here only for development*/}
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <Row>
                <Col xs="2">
            <div>
            <img alt='card' src={require(`./${driver}`)} />
            </div>
            <div>
                <img className='back' alt='logo' src={require(`./imagebank/logo.png`)}/>
                {/*<p>{car}</p>*/}
            </div>
                </Col>
            </Row>
        </div>
        </Container>
    )
};

export default Card;