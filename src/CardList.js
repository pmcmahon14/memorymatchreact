import React from 'react';
import Card from './Card';
import {Container, Row, Col} from 'reactstrap';

const CardList = ({images}) => {
    return (
        <Container fluid>
            <Row>
        <Col xs="2">
            {
                images.map((user, i) => {
                    return (
                        <Card
                            driver={images[i].driver}
                            car={images[i].car}
                        />
                    )
                })
            }
        </Col>
                <Col xs="2">
                    {
                        images.map((user, i) => {
                            return (
                                <Card
                                    driver={images[i].driver}
                                    car={images[i].car}
                                />
                            )
                        })
                    }
                </Col>
            </Row>
        </Container>
    )
};

export default CardList;