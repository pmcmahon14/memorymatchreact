import React from 'react';
import {Row, Col} from 'react-bootstrap';

const Container = () => {
    return (

            <div>
            <Row>
                <Col xs={2}>xs=2</Col>
                <Col xs={2}></Col>
                <Col xs={2}></Col>
                <Col xs={2}></Col>
                <Col xs={2}></Col>
                <Col xs={2}></Col>
            </Row>
            </div>

    )
};

export default Container;