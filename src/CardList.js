import React from 'react';
import Card from './Card';
import {Col} from 'react-bootstrap';

const CardList = ({images}) => {
    return (
        <div>
            <Col xs={2}>
            {
                images.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            driver={images[i].driver}
                            car={images[i].car}
                        />
                    )
                })
            }
            </Col>
        </div>
    )
};

export default CardList;