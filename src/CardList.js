import React from 'react';
import Card from './Card';
import {Container, Row, Col} from 'reactstrap';

const CardList = ({images}) => {
    const cardArray = images.map((user, i) => {
        return <Card
            driver={images[i].driver}
            car={images[i].car}
        />
    });
    return (
        <div>
            <Col xs='2'>
            {cardArray}
            </Col>
        </div>
    )
};

export default CardList;