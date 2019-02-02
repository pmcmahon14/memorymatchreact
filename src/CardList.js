import React from 'react';
import Card from './Card';
import Col from 'react-bootstrap/Col';

const CardList = ({images}) => {
    return (
        <div>
            <Col xs={2}>
            {
                images.map((user, i) => {
                    return (
                        <Card xs={2}
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