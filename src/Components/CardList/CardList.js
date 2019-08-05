import React from 'react';

import Card from '../Card/Card';
import {Col} from 'reactstrap';

const CardList = ({images}) => {
    return (
        <div>
            {
                images.map((driver, i) => {
                    return (
                        <Col xs='2'>
                        <Card
                            key={i}
                            id={images[i].id}
                        />
                        </Col>
                    )
                })
            }
        </div>
    )
};

export default CardList;