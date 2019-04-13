import React, {Component} from 'react';
import {Container} from 'reactstrap';
import './Background.css';

class background extends Component {
    render () {
        return (
            <div>
                <Container fluid>
                    <img className='background' src={require('../../imagebank/joeychamp.jpg')}/>
                </Container>
            </div>
        )
    }
}

export default background;